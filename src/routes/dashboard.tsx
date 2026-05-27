import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Unlock, BookOpen, Sparkles, ArrowRight, UserCheck, Star, Search } from "lucide-react";
import { useBookmarks, useMastery, summariseMastery } from "@/hooks/use-study-state";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

const DEFAULT_AGENT_PLACEHOLDER = "Contact admin for agent details";

function Dashboard() {
  const { user, profile, loading } = useAuth();
  const nav = useNavigate();
  const [sets, setSets] = useState<any[]>([]);
  const [setCardIds, setSetCardIds] = useState<Record<string, string[]>>({});
  const [fetching, setFetching] = useState(true);
  const [agentName, setAgentName] = useState<string | null>(null);
  const { mastery } = useMastery();
  const { bookmarks } = useBookmarks();

  useEffect(() => { if (!loading && !user) nav({ to: "/sign-in" }); }, [user, loading, nav]);

  useEffect(() => {
    if (!user) return;
    setFetching(true);
    (async () => {
      const { data: setRows } = await supabase.from("topic_sets").select("*").order("order_index");
      setSets(setRows || []);
      const { data: idRows } = await supabase.from("cards").select("id, topic_set_id");
      const map: Record<string, string[]> = {};
      (idRows || []).forEach((r: any) => { (map[r.topic_set_id] ||= []).push(r.id); });
      setSetCardIds(map);
      setFetching(false);
    })();
    supabase.from("app_settings").select("primary_agent_name").eq("id", true).maybeSingle()
      .then(({ data }) => { if (data?.primary_agent_name) setAgentName(data.primary_agent_name); });
  }, [user]);

  const isFull = profile?.access_level === "full";
  const totalCards = useMemo(() => Object.values(setCardIds).reduce((s, x) => s + x.length, 0), [setCardIds]);
  const showAgent = agentName && agentName.trim() && agentName.trim() !== DEFAULT_AGENT_PLACEHOLDER;

  return (
    <div className="min-h-screen bg-hero">
      <AppHeader />
      <main className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Your library</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
          </h1>
          <p className="text-muted-foreground mt-2 inline-flex items-center gap-2 flex-wrap">
            <Unlock className="h-4 w-4 text-secondary" />
            {isFull ? "Full access unlocked – every card across every paper is yours." : "Free preview – first cards of each topic are unlocked."}
            {totalCards > 0 && <span className="text-xs">· {totalCards} cards total</span>}
          </p>
          {showAgent && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-secondary/40 bg-secondary/5 px-3 py-1.5 text-sm">
              <UserCheck className="h-4 w-4 text-secondary" />
              <span>Authorised agent: <strong>{agentName}</strong></span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button asChild variant="outline"><Link to="/search"><Search className="h-4 w-4 mr-1" /> Search all cards</Link></Button>
          <Button asChild variant="outline">
            <Link to="/bookmarks">
              <Star className="h-4 w-4 mr-1 fill-amber-400 text-amber-400" /> My bookmarks
              {bookmarks.length > 0 && <Badge variant="outline" className="ml-2">{bookmarks.length}</Badge>}
            </Link>
          </Button>
        </div>

        {fetching ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6 bg-card animate-pulse h-40" />
            ))}
          </div>
        ) : sets.length === 0 ? (
          <Card className="p-10 bg-card text-card-foreground text-center">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <h3 className="text-xl font-semibold">No topic sets yet</h3>
            <p className="text-sm text-muted-foreground mt-2">Admin hasn't added content to the library yet. Check back soon.</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {sets.map((s, i) => {
              const ids = setCardIds[s.id] || [];
              const total = ids.length;
              const stat = summariseMastery(ids, mastery);
              const gradients = [
                "from-indigo-500/20 to-purple-500/20",
                "from-emerald-500/20 to-teal-500/20",
                "from-amber-500/20 to-orange-500/20",
                "from-rose-500/20 to-pink-500/20",
                "from-cyan-500/20 to-blue-500/20",
              ];
              const g = gradients[i % gradients.length];
              return (
                <Card key={s.id} className={`p-6 bg-card text-card-foreground shadow-card-elev hover:border-secondary transition border-2 border-transparent relative overflow-hidden group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${g} opacity-50 group-hover:opacity-100 transition`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Badge variant="outline" className="mb-2">Paper {i + 1}</Badge>
                        <h3 className="font-semibold text-xl">{s.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.description}</p>
                      </div>
                    </div>

                    {total > 0 && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>{stat.reviewed} / {total} reviewed</span>
                          <span>{stat.masteryPercent}% mastered</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted/40 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-500/80" style={{ width: `${stat.masteryPercent}%` }} />
                          <div className="h-full bg-amber-500/80" style={{ width: `${Math.max(0, stat.percent - stat.masteryPercent)}%` }} />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-6">
                      <div className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
                        <BookOpen className="h-4 w-4" />
                        {total} cards
                        {!isFull && total > 0 && <Badge variant="outline">First {s.free_card_limit} free</Badge>}
                      </div>
                      <Button asChild className="bg-brand-gradient">
                        <Link to="/revise/$setId" params={{ setId: s.id }}>
                          Revise <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
