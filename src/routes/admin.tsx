import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AppHeader } from "@/components/AppHeader";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Trash2, ShieldOff, ShieldCheck, Copy, Download, Search, Edit3, Save, X, Check, Send, Mail, AlertTriangle } from "lucide-react";
import { approveAccessRequest, rejectAccessRequest, resendAccessCodeEmail } from "@/lib/access.functions";

export const Route = createFileRoute("/admin")({ component: Admin });

function randCode() {
  const seg = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `AUT-${seg()}-${seg()}`;
}

function Admin() {
  const { user, isAdmin, loading } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) nav({ to: "/admin-setup" });
      else if (!isAdmin) nav({ to: "/dashboard" });
    }
  }, [user, isAdmin, loading, nav]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-hero">
      <AppHeader showBack backTo="/dashboard" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Admin dashboard</h1>
        <Tabs defaultValue="requests">
          <TabsList className="flex flex-wrap h-auto">
            <TabsTrigger value="requests">Access Requests</TabsTrigger>
            <TabsTrigger value="codes">Access Codes</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="tickets">Messages</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="requests"><RequestsPanel /></TabsContent>
          <TabsContent value="codes"><CodesPanel /></TabsContent>
          <TabsContent value="content"><ContentPanel /></TabsContent>
          <TabsContent value="users"><UsersPanel /></TabsContent>
          <TabsContent value="tickets"><TicketsPanel /></TabsContent>
          <TabsContent value="payments"><PaymentsPanel /></TabsContent>
          <TabsContent value="agents"><AgentsPanel /></TabsContent>
          <TabsContent value="settings"><SettingsPanel /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function RequestsPanel() {
  const [rows, setRows] = useState<any[]>([]);
  const [filter, setFilter] = useState<"pending" | "all">("pending");
  const approveFn = useServerFn(approveAccessRequest);
  const rejectFn = useServerFn(rejectAccessRequest);
  const resendFn = useServerFn(resendAccessCodeEmail);

  const load = async () => {
    let q = supabase.from("access_requests").select("*").order("created_at", { ascending: false });
    if (filter === "pending") q = q.eq("status", "pending");
    const { data } = await q;
    setRows(data || []);
  };
  useEffect(() => { load(); }, [filter]);

  const approve = async (id: string) => {
    try {
      const res = await approveFn({ data: { request_id: id } });
      if (res.email.sent) {
        toast.success(`Approved. Code ${res.code} emailed.`);
      } else {
        toast.warning(`Approved. Code ${res.code} — email NOT sent (${res.email.reason}). Copy & send manually.`);
      }
      try { await navigator.clipboard?.writeText(res.code); } catch {}
      load();
    } catch (e: any) { toast.error(e?.message || "Approval failed"); }
  };
  const resend = async (id: string) => {
    try {
      const res = await resendFn({ data: { request_id: id } });
      if (res.email.sent) toast.success("Code re-emailed");
      else toast.warning(`Email not sent: ${res.email.reason}`);
    } catch (e: any) { toast.error(e?.message || "Resend failed"); }
  };
  const reject = async (id: string) => {
    if (!confirm("Reject this request?")) return;
    try { await rejectFn({ data: { request_id: id } }); toast.success("Rejected"); load(); }
    catch (e: any) { toast.error(e?.message || "Failed"); }
  };
  const del = async (id: string) => {
    if (!confirm("Delete this request?")) return;
    await supabase.from("access_requests").delete().eq("id", id);
    load();
  };
  const copy = (code: string) => { navigator.clipboard?.writeText(code); toast.success(`Copied ${code}`); };

  return (
    <div className="space-y-4 mt-4">
      <Card className="p-4 bg-amber-500/10 border-amber-500/40 text-card-foreground text-sm">
        <p className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
          <span><strong>Approval flow:</strong> Agent calls you with the name of the person who paid. Find their pending
          request below, click <strong>Approve</strong> — a unique access code is generated and emailed to them.
          Their code is also visible here so you can copy/share manually if needed.</span></p>
      </Card>
      <div className="flex gap-2">
        <Button size="sm" variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}>Pending</Button>
        <Button size="sm" variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>All</Button>
        <div className="ml-auto text-sm text-muted-foreground self-center">{rows.length} request(s)</div>
      </div>
      {rows.length === 0 && <Card className="p-6 bg-card text-card-foreground text-sm text-muted-foreground">No requests.</Card>}
      {rows.map(r => (
        <Card key={r.id} className="p-5 bg-card text-card-foreground">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold">{r.full_name}</h4>
                <Badge variant={r.status === "approved" ? "default" : r.status === "rejected" ? "destructive" : "outline"}>{r.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">📱 <a className="underline" href={`https://wa.me/${r.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">{r.whatsapp}</a></p>
              {r.email && <p className="text-sm text-muted-foreground">✉️ <a href={`mailto:${r.email}`} className="underline">{r.email}</a></p>}
              {r.generated_code && (
                <div className="mt-3 p-3 rounded bg-secondary/10 border border-secondary/40">
                  <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-1">Access code</p>
                  <div className="flex items-center gap-2">
                    <code className="text-lg font-mono font-bold">{r.generated_code}</code>
                    <Button size="sm" variant="ghost" onClick={() => copy(r.generated_code)}><Copy className="h-3 w-3" /></Button>
                  </div>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2">Submitted {new Date(r.created_at).toLocaleString()}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {r.status === "pending" && (
                <>
                  <Button size="sm" onClick={() => approve(r.id)} className="bg-brand-gradient"><Check className="h-4 w-4 mr-1" /> Approve & email</Button>
                  <Button size="sm" variant="outline" onClick={() => reject(r.id)}><X className="h-4 w-4 mr-1" /> Reject</Button>
                </>
              )}
              {r.status === "approved" && r.generated_code && (
                <Button size="sm" variant="outline" onClick={() => resend(r.id)}><Mail className="h-4 w-4 mr-1" /> Resend email</Button>
              )}
              <Button size="sm" variant="ghost" onClick={() => del(r.id)}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function CodesPanel() {
  const [codes, setCodes] = useState<any[]>([]);
  const [seats, setSeats] = useState(1);
  const [amount, setAmount] = useState(5);
  const [agent, setAgent] = useState("");
  const [assigned, setAssigned] = useState("");
  const [bulk, setBulk] = useState(1);
  const [search, setSearch] = useState("");

  const load = async () => {
    const { data } = await supabase.from("access_codes").select("*").order("created_at", { ascending: false });
    setCodes(data || []);
  };
  useEffect(() => { load(); }, []);

  const generate = async () => {
    const assignedList = assigned.split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
    const rows = Array.from({ length: Math.max(1, bulk) }, () => ({
      code: randCode(), total_seats: seats, amount, agent_name: agent || null, assigned_emails: assignedList,
    }));
    const { error } = await supabase.from("access_codes").insert(rows);
    if (error) return toast.error(error.message);
    toast.success(`Generated ${rows.length} code${rows.length > 1 ? "s" : ""}`);
    setAgent(""); setAssigned("");
    load();
  };

  const del = async (id: string) => {
    if (!confirm("Delete code?")) return;
    await supabase.from("access_codes").delete().eq("id", id);
    load();
  };

  const copy = (code: string) => { navigator.clipboard?.writeText(code); toast.success(`Copied ${code}`); };

  const exportCsv = () => {
    const header = "code,seats_used,seats_total,amount,agent,assigned,created_at\n";
    const rows = codes.map(c => `${c.code},${c.used_seats},${c.total_seats},${c.amount},"${c.agent_name || ""}","${(c.assigned_emails || []).join(";")}",${c.created_at}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `access-codes-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  };

  const filtered = codes.filter(c => !search ||
    c.code.toLowerCase().includes(search.toLowerCase()) ||
    (c.agent_name || "").toLowerCase().includes(search.toLowerCase()) ||
    (c.assigned_emails || []).join(",").toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="space-y-6 mt-4">
      <Card className="p-6 bg-card text-card-foreground">
        <h3 className="font-semibold mb-3">Generate code(s)</h3>
        <div className="grid md:grid-cols-5 gap-3">
          <div><Label>Quantity</Label><Input type="number" min={1} max={100} value={bulk} onChange={e => setBulk(+e.target.value)} /></div>
          <div><Label>Seats per code</Label><Input type="number" min={1} value={seats} onChange={e => setSeats(+e.target.value)} /></div>
          <div><Label>Amount ($)</Label><Input type="number" min={0} step="0.01" value={amount} onChange={e => setAmount(+e.target.value)} /></div>
          <div><Label>Agent name</Label><Input value={agent} onChange={e => setAgent(e.target.value)} /></div>
          <div><Label>Assigned emails (comma)</Label><Input value={assigned} onChange={e => setAssigned(e.target.value)} placeholder="optional" /></div>
        </div>
        <Button onClick={generate} className="mt-4 bg-brand-gradient"><Plus className="h-4 w-4 mr-1" /> Generate</Button>
      </Card>

      <Card className="p-4 bg-card text-card-foreground">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search code, agent, email..." className="pl-9" />
          </div>
          <Button variant="outline" onClick={exportCsv}><Download className="h-4 w-4 mr-1" /> Export CSV</Button>
          <div className="text-sm text-muted-foreground">{filtered.length} of {codes.length} codes</div>
        </div>
      </Card>

      <Card className="p-0 bg-card text-card-foreground overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40"><tr>
            <th className="text-left p-3">Code</th><th className="text-left p-3">Seats</th>
            <th className="text-left p-3">Amount</th><th className="text-left p-3">Agent</th>
            <th className="text-left p-3">Assigned</th><th></th>
          </tr></thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id} className="border-t border-border/40">
                <td className="p-3 font-mono flex items-center gap-2">{c.code}
                  <Button variant="ghost" size="sm" onClick={() => copy(c.code)}><Copy className="h-3 w-3" /></Button>
                </td>
                <td className="p-3">{c.used_seats}/{c.total_seats}</td>
                <td className="p-3">${c.amount}</td>
                <td className="p-3">{c.agent_name || "_"}</td>
                <td className="p-3 text-xs">{(c.assigned_emails || []).join(", ") || "any"}</td>
                <td className="p-3"><Button variant="ghost" size="sm" onClick={() => del(c.id)}><Trash2 className="h-4 w-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}


function ContentPanel() {
  const [sets, setSets] = useState<any[]>([]);
  const [activeSet, setActiveSet] = useState<string>("");
  const [cards, setCards] = useState<any[]>([]);
  const [q, setQ] = useState(""); const [a, setA] = useState("");
  const [limit, setLimit] = useState(5);
  const [newSetTitle, setNewSetTitle] = useState("");
  const [newSetDesc, setNewSetDesc] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [editQ, setEditQ] = useState(""); const [editA, setEditA] = useState("");

  const loadSets = async () => {
    const { data } = await supabase.from("topic_sets").select("*").order("order_index");
    setSets(data || []);
    if (data && data[0] && !activeSet) setActiveSet(data[0].id);
  };
  useEffect(() => { loadSets(); }, []);

  const loadCards = async () => {
    if (!activeSet) return;
    const { data } = await supabase.from("cards").select("*").eq("topic_set_id", activeSet).order("order_index");
    setCards(data || []);
  };

  useEffect(() => {
    loadCards();
    const s = sets.find(s => s.id === activeSet);
    if (s) setLimit(s.free_card_limit);
  }, [activeSet, sets]);

  const addCard = async () => {
    if (!q.trim() || !a.trim()) return;
    const order = cards.length + 1;
    const { error } = await supabase.from("cards").insert({ topic_set_id: activeSet, question: q, answer: a, order_index: order });
    if (error) return toast.error(error.message);
    toast.success("Card added"); setQ(""); setA(""); loadCards();
  };

  const delCard = async (id: string) => {
    if (!confirm("Delete card?")) return;
    await supabase.from("cards").delete().eq("id", id);
    setCards(c => c.filter(x => x.id !== id));
  };

  const startEdit = (c: any) => { setEditing(c.id); setEditQ(c.question); setEditA(c.answer); };
  const saveEdit = async () => {
    if (!editing) return;
    await supabase.from("cards").update({ question: editQ, answer: editA }).eq("id", editing);
    setEditing(null); toast.success("Card updated"); loadCards();
  };

  const updateLimit = async () => {
    await supabase.from("topic_sets").update({ free_card_limit: limit }).eq("id", activeSet);
    toast.success("Free limit updated"); loadSets();
  };

  const createSet = async () => {
    if (!newSetTitle.trim()) return;
    const order = sets.length + 1;
    const { data, error } = await supabase.from("topic_sets").insert({ title: newSetTitle, description: newSetDesc, order_index: order }).select().single();
    if (error) return toast.error(error.message);
    toast.success("Topic set created"); setNewSetTitle(""); setNewSetDesc("");
    await loadSets(); if (data) setActiveSet(data.id);
  };

  const deleteSet = async () => {
    if (!activeSet) return;
    if (!confirm("Delete this topic set and ALL its cards?")) return;
    await supabase.from("cards").delete().eq("topic_set_id", activeSet);
    await supabase.from("topic_sets").delete().eq("id", activeSet);
    setActiveSet(""); loadSets();
  };

  return (
    <div className="space-y-6 mt-4">
      <Card className="p-6 bg-card text-card-foreground">
        <h3 className="font-semibold mb-3">Create new topic set</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <Input placeholder="Title (e.g. Paper 3 _ Boolean Algebra)" value={newSetTitle} onChange={e => setNewSetTitle(e.target.value)} />
          <Input placeholder="Description" value={newSetDesc} onChange={e => setNewSetDesc(e.target.value)} />
          <Button onClick={createSet} className="bg-brand-gradient"><Plus className="h-4 w-4 mr-1" /> Create</Button>
        </div>
      </Card>

      <Card className="p-6 bg-card text-card-foreground">
        <Label>Active topic set</Label>
        <div className="flex gap-2 mt-1">
          <select value={activeSet} onChange={e => setActiveSet(e.target.value)} className="flex-1 rounded-md border border-input bg-background text-foreground p-2">
            {sets.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
          <Button variant="destructive" onClick={deleteSet}><Trash2 className="h-4 w-4" /></Button>
        </div>
        <div className="mt-3 flex items-end gap-3">
          <div><Label>Free card limit</Label><Input type="number" value={limit} onChange={e => setLimit(+e.target.value)} className="w-32" /></div>
          <Button onClick={updateLimit}>Save limit</Button>
          <div className="text-sm text-muted-foreground ml-auto">{cards.length} cards in this set</div>
        </div>
      </Card>

      <Card className="p-6 bg-card text-card-foreground">
        <h3 className="font-semibold mb-3">Add card</h3>
        <p className="text-xs text-muted-foreground mb-2">
          Math: wrap inline math in <code>$...$</code> and block math in <code>$$...$$</code>. ASCII diagrams: wrap in triple backticks.
        </p>
        <div className="space-y-2">
          <div><Label>Question</Label><textarea value={q} onChange={e => setQ(e.target.value)} rows={2} className="w-full rounded-md border border-input bg-background text-foreground p-2 text-sm" /></div>
          <div><Label>Answer</Label><textarea value={a} onChange={e => setA(e.target.value)} rows={5} className="w-full rounded-md border border-input bg-background text-foreground p-2 text-sm font-mono" /></div>
          <Button onClick={addCard} className="bg-brand-gradient"><Plus className="h-4 w-4 mr-1" /> Add card</Button>
        </div>
      </Card>

      <Card className="p-0 bg-card text-card-foreground overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40"><tr><th className="text-left p-3 w-12">#</th><th className="text-left p-3">Question</th><th className="w-32"></th></tr></thead>
          <tbody>
            {cards.map(c => (
              <tr key={c.id} className="border-t border-border/40 align-top">
                <td className="p-3">{c.order_index}</td>
                <td className="p-3">
                  {editing === c.id ? (
                    <div className="space-y-2">
                      <textarea value={editQ} onChange={e => setEditQ(e.target.value)} rows={2} className="w-full rounded-md border border-input bg-background text-foreground p-2 text-sm" />
                      <textarea value={editA} onChange={e => setEditA(e.target.value)} rows={5} className="w-full rounded-md border border-input bg-background text-foreground p-2 text-sm font-mono" />
                    </div>
                  ) : c.question}
                </td>
                <td className="p-3 text-right">
                  {editing === c.id ? (
                    <>
                      <Button variant="ghost" size="sm" onClick={saveEdit}><Save className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => setEditing(null)}><X className="h-4 w-4" /></Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" size="sm" onClick={() => startEdit(c)}><Edit3 className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => delCard(c.id)}><Trash2 className="h-4 w-4" /></Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );

}

function UsersPanel() {
  const [users, setUsers] = useState<any[]>([]);
  const [codesByUser, setCodesByUser] = useState<Record<string, any[]>>({});
  const [search, setSearch] = useState("");

  const load = async () => {
    const { data: u } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
    setUsers(u || []);
    // Codes issued/bound directly to the user
    const { data: bound } = await supabase.from("access_codes").select("id, code, amount, total_seats, used_seats, agent_name, bound_user_id, created_at");
    // Codes the user redeemed
    const { data: usage } = await supabase.from("access_code_usage").select("user_id, used_at, access_codes(code, amount, agent_name)");
    const map: Record<string, any[]> = {};
    (bound || []).forEach((c: any) => {
      if (!c.bound_user_id) return;
      (map[c.bound_user_id] ||= []).push({ code: c.code, amount: c.amount, agent: c.agent_name, source: "issued", at: c.created_at });
    });
    (usage || []).forEach((r: any) => {
      const c = r.access_codes;
      if (!c) return;
      (map[r.user_id] ||= []).push({ code: c.code, amount: c.amount, agent: c.agent_name, source: "redeemed", at: r.used_at });
    });
    setCodesByUser(map);
  };
  useEffect(() => { load(); }, []);

  const toggle = async (u: any) => {
    const next = u.access_level === "full" ? "free" : "full";
    await supabase.from("profiles").update({ access_level: next }).eq("id", u.id);
    load();
  };

  const copy = (s: string) => { navigator.clipboard?.writeText(s); toast.success(`Copied ${s}`); };

  const filtered = users.filter(u =>
    !search ||
    (u.email || "").toLowerCase().includes(search.toLowerCase()) ||
    (u.full_name || "").toLowerCase().includes(search.toLowerCase()) ||
    (codesByUser[u.id] || []).some((c) => c.code.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-4 mt-4">
      <Card className="p-4 bg-card text-card-foreground">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search user or code..." className="pl-9" />
        </div>
      </Card>
      <Card className="p-0 bg-card text-card-foreground overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40"><tr>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Access</th>
            <th className="text-left p-3">Access codes</th>
            <th></th>
          </tr></thead>
          <tbody>
            {filtered.map(u => {
              const codes = codesByUser[u.id] || [];
              return (
                <tr key={u.id} className="border-t border-border/40 align-top">
                  <td className="p-3 break-all">{u.email}</td>
                  <td className="p-3">{u.full_name || "_"}</td>
                  <td className="p-3"><Badge variant={u.access_level === "full" ? "default" : "outline"}>{u.access_level}</Badge></td>
                  <td className="p-3">
                    {codes.length === 0 ? (
                      <span className="text-xs text-muted-foreground">_</span>
                    ) : (
                      <div className="space-y-1">
                        {codes.map((c, i) => (
                          <div key={i} className="flex items-center gap-2 flex-wrap">
                            <code className="font-mono text-xs bg-secondary/10 border border-secondary/30 rounded px-2 py-0.5">{c.code}</code>
                            <Button variant="ghost" size="sm" className="h-6 px-1" onClick={() => copy(c.code)}><Copy className="h-3 w-3" /></Button>
                            <Badge variant="outline" className="text-[10px]">{c.source}</Badge>
                            {c.agent && <span className="text-[11px] text-muted-foreground">· {c.agent}</span>}
                            <span className="text-[11px] text-muted-foreground">· ${c.amount}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="p-3"><Button variant="ghost" size="sm" onClick={() => toggle(u)}>
                    {u.access_level === "full" ? <><ShieldOff className="h-4 w-4 mr-1" />Downgrade</> : <><ShieldCheck className="h-4 w-4 mr-1" />Upgrade</>}
                  </Button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function TicketsPanel() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [replyDraft, setReplyDraft] = useState<Record<string, string>>({});

  const load = async () => {
    const { data } = await supabase.from("support_tickets").select("*").order("created_at", { ascending: false });
    setTickets(data || []);
  };
  useEffect(() => { load(); }, []);

  const sendReply = async (t: any) => {
    const reply = (replyDraft[t.id] || "").trim();
    if (!reply) return toast.error("Write a reply first");
    const { error } = await supabase.from("support_tickets")
      .update({ admin_reply: reply, replied_at: new Date().toISOString(), status: "closed" })
      .eq("id", t.id);
    if (error) return toast.error(error.message);
    toast.success("Reply saved (user will see it on Support page)");
    setReplyDraft((d) => ({ ...d, [t.id]: "" }));
    load();
  };

  const del = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await supabase.from("support_tickets").delete().eq("id", id);
    load();
  };

  return (
    <div className="space-y-3 mt-4">
      {tickets.length === 0 && <p className="text-muted-foreground text-sm">No messages.</p>}
      {tickets.map(t => (
        <Card key={t.id} className="p-4 bg-card text-card-foreground">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm"><strong>{t.subject}</strong><Badge variant="outline">{t.status}</Badge></div>
              <p className="text-xs text-muted-foreground mt-1">From: {t.user_email} · {new Date(t.created_at).toLocaleString()}</p>
              <p className="text-sm mt-2 whitespace-pre-wrap">{t.message}</p>
              {t.admin_reply && (
                <div className="mt-3 rounded-md border border-secondary/40 bg-secondary/5 p-3">
                  <p className="text-xs text-secondary font-semibold mb-1">Your reply · {t.replied_at ? new Date(t.replied_at).toLocaleString() : ""}</p>
                  <p className="text-sm whitespace-pre-wrap">{t.admin_reply}</p>
                </div>
              )}
              <div className="mt-3 space-y-2">
                <Textarea
                  value={replyDraft[t.id] || ""}
                  onChange={(e) => setReplyDraft((d) => ({ ...d, [t.id]: e.target.value }))}
                  rows={3}
                  placeholder={t.admin_reply ? "Send another reply…" : "Write a reply…"}
                />
                <Button size="sm" onClick={() => sendReply(t)} className="bg-brand-gradient">
                  <Send className="h-4 w-4 mr-1" /> Send reply
                </Button>
              </div>
            </div>
            <Button size="sm" variant="ghost" onClick={() => del(t.id)}><Trash2 className="h-4 w-4" /></Button>
          </div>
        </Card>
      ))}
    </div>
  );
}


function PaymentsPanel() {
  const [reqs, setReqs] = useState<any[]>([]);
  const [email, setEmail] = useState(""); const [email2, setEmail2] = useState("");
  const [amount, setAmount] = useState(5); const [agent, setAgent] = useState("");

  const load = async () => {
    const { data } = await supabase.from("payment_requests").select("*").order("created_at", { ascending: false });
    setReqs(data || []);
  };
  useEffect(() => { load(); }, []);

  const add = async () => {
    if (!email) return toast.error("Email required");
    await supabase.from("payment_requests").insert({ student_email: email, student_email_2: email2 || null, amount, agent_name: agent || null });
    setEmail(""); setEmail2(""); setAgent(""); load();
  };

  return (
    <div className="space-y-4 mt-4">
      <Card className="p-6 bg-card text-card-foreground">
        <h3 className="font-semibold mb-3">Log payment notification</h3>
        <div className="grid md:grid-cols-4 gap-3">
          <Input placeholder="Student email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Second email (if pair)" value={email2} onChange={e => setEmail2(e.target.value)} />
          <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(+e.target.value)} />
          <Input placeholder="Agent" value={agent} onChange={e => setAgent(e.target.value)} />
        </div>
        <Button onClick={add} className="mt-3 bg-brand-gradient">Log</Button>
      </Card>
      <Card className="p-0 bg-card text-card-foreground overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40"><tr><th className="text-left p-3">Email(s)</th><th className="text-left p-3">Amount</th><th className="text-left p-3">Agent</th><th className="text-left p-3">Status</th></tr></thead>
          <tbody>{reqs.map(r => (
            <tr key={r.id} className="border-t border-border/40">
              <td className="p-3">{r.student_email}{r.student_email_2 ? `, ${r.student_email_2}` : ""}</td>
              <td className="p-3">${r.amount}</td>
              <td className="p-3">{r.agent_name || "_"}</td>
              <td className="p-3"><Badge variant="outline">{r.status}</Badge></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

function AgentsPanel() {
  const [agents, setAgents] = useState<any[]>([]);
  const [name, setName] = useState(""); const [contact, setContact] = useState("");
  const load = async () => { const { data } = await supabase.from("agents").select("*").order("created_at", { ascending: false }); setAgents(data || []); };
  useEffect(() => { load(); }, []);
  const add = async () => {
    if (!name) return;
    await supabase.from("agents").insert({ name, contact });
    setName(""); setContact(""); load();
  };
  const del = async (id: string) => { await supabase.from("agents").delete().eq("id", id); load(); };
  return (
    <div className="space-y-4 mt-4">
      <Card className="p-6 bg-card text-card-foreground">
        <div className="grid md:grid-cols-3 gap-3">
          <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="Contact" value={contact} onChange={e => setContact(e.target.value)} />
          <Button onClick={add} className="bg-brand-gradient">Add agent</Button>
        </div>
      </Card>
      <Card className="p-0 bg-card text-card-foreground overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40"><tr><th className="text-left p-3">Name</th><th className="text-left p-3">Contact</th><th></th></tr></thead>
          <tbody>{agents.map(a => (
            <tr key={a.id} className="border-t border-border/40">
              <td className="p-3">{a.name}</td><td className="p-3">{a.contact}</td>
              <td className="p-3"><Button variant="ghost" size="sm" onClick={() => del(a.id)}><Trash2 className="h-4 w-4" /></Button></td>
            </tr>
          ))}</tbody>
        </table>
      </Card>
    </div>
  );
}

function SettingsPanel() {
  const [agent, setAgent] = useState("");
  const [solo, setSolo] = useState(5);
  const [pair, setPair] = useState(8);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    const { data } = await supabase.from("app_settings").select("*").eq("id", true).maybeSingle();
    if (data) { setAgent(data.primary_agent_name); setSolo(Number(data.solo_amount)); setPair(Number(data.pair_amount)); }
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!agent.trim()) return toast.error("Agent name required");
    setBusy(true);
    const { error } = await supabase.from("app_settings").upsert({
      id: true, primary_agent_name: agent.trim(), solo_amount: solo, pair_amount: pair, updated_at: new Date().toISOString(),
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Settings updated — visible everywhere");
  };

  return (
    <div className="space-y-4 mt-4">
      <Card className="p-6 bg-card text-card-foreground">
        <h3 className="font-semibold mb-1">Public app settings</h3>
        <p className="text-xs text-muted-foreground mb-4">Shown on home page, request-access page and user dashboard.</p>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="md:col-span-3">
            <Label>Authorised agent name</Label>
            <Input value={agent} onChange={e => setAgent(e.target.value)} maxLength={255} placeholder="e.g. John Doe (+263 77 123 4567)" />
          </div>
          <div>
            <Label>Solo amount ($)</Label>
            <Input type="number" min={0} step="0.01" value={solo} onChange={e => setSolo(+e.target.value)} />
          </div>
          <div>
            <Label>Pair amount ($)</Label>
            <Input type="number" min={0} step="0.01" value={pair} onChange={e => setPair(+e.target.value)} />
          </div>
        </div>
        <Button onClick={save} disabled={busy} className="mt-4 bg-brand-gradient"><Save className="h-4 w-4 mr-1" /> {busy ? "Saving…" : "Save settings"}</Button>
      </Card>
    </div>
  );
}
