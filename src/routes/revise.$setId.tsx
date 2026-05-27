import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ArrowLeft, Lock, RotateCw, Star, ThumbsUp, AlertCircle } from "lucide-react";
import { useScreenshotProtection } from "@/hooks/use-screenshot-protection";
import { RichContent } from "@/components/RichContent";
import { useBookmarks, useMastery, summariseMastery } from "@/hooks/use-study-state";

export const Route = createFileRoute("/revise/$setId")({ component: Revise });

function Revise() {
  const { setId } = Route.useParams();
  const { user, profile, loading } = useAuth();
  const nav = useNavigate();
  const { hidden } = useScreenshotProtection();
  const [set, setSet] = useState<any>(null);
  const [cards, setCards] = useState<any[]>([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { mastery, setLevel } = useMastery();
  const { has: isBookmarked, toggle: toggleBookmark } = useBookmarks();

  useEffect(() => { if (!loading && !user) nav({ to: "/sign-in" }); }, [user, loading, nav]);

  useEffect(() => {
    supabase.from("topic_sets").select("*").eq("id", setId).maybeSingle().then(({ data }) => setSet(data));
    supabase.from("cards").select("*").eq("topic_set_id", setId).order("order_index").then(({ data }) => setCards(data || []));
  }, [setId]);

  const summary = useMemo(() => summariseMastery(cards.map((c) => c.id), mastery), [cards, mastery]);

  if (!set || cards.length === 0) {
    return <div className="min-h-screen bg-hero"><AppHeader /><div className="container mx-auto p-10 text-muted-foreground">Loading…</div></div>;
  }

  const isFull = profile?.access_level === "full";
  const freeLimit = set.free_card_limit ?? 5;
  const card = cards[idx];
  const locked = !isFull && idx >= freeLimit;
  const progress = ((idx + 1) / cards.length) * 100;

  const goNext = () => { setIdx((i) => Math.min(cards.length - 1, i + 1)); setFlipped(false); };
  const mark = (level: "got" | "practice") => {
    setLevel(card.id, level);
    if (idx < cards.length - 1) goNext();
  };
  const cardLevel = mastery[card.id];

  return (
    <div className="min-h-screen bg-hero no-select">
      <AppHeader />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Button variant="ghost" asChild className="mb-4"><Link to="/dashboard"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link></Button>
        <h1 className="text-2xl font-bold mb-1">{set.title}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 flex-wrap">
          <span>Card {idx + 1} of {cards.length}</span>
          {!isFull && <Badge variant="outline">Free: {Math.min(freeLimit, cards.length)}</Badge>}
          <span className="ml-auto flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="border-emerald-500/40 text-emerald-400">{summary.got} mastered</Badge>
            <Badge variant="outline" className="border-amber-500/40 text-amber-400">{summary.practice} to revisit</Badge>
            <Badge variant="outline">{summary.masteryPercent}%</Badge>
          </span>
        </div>
        <div className="h-1 w-full bg-muted/40 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-brand-gradient transition-all" style={{ width: `${progress}%` }} />
        </div>

        <div className="relative">
          {hidden && <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center text-muted-foreground text-sm">Protected. Return focus to the app to continue.</div>}
          <Card
            className="p-8 min-h-[360px] bg-card text-card-foreground shadow-card-elev cursor-pointer protected-watermark"
            data-watermark={profile?.email || "INDUSTRIAL AUTOMATION"}
            onClick={() => !locked && setFlipped((f) => !f)}
          >
            {locked ? (
              <div className="flex flex-col items-center justify-center text-center h-[300px] gap-4">
                <Lock className="h-12 w-12 text-muted-foreground" />
                <h3 className="text-xl font-semibold">Full access required</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  You've reached the end of the free preview. Pay an authorised agent in cash. Once admin confirms, a new access code is emailed to you and the rest unlocks.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                  <Badge className="bg-brand-gradient text-primary-foreground">{flipped ? "Answer" : "Question"}</Badge>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      title={isBookmarked(card.id) ? "Remove bookmark" : "Bookmark card"}
                      onClick={(e) => { e.stopPropagation(); toggleBookmark(card.id); }}
                    >
                      <Star className={`h-4 w-4 ${isBookmarked(card.id) ? "fill-amber-400 text-amber-400" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); setFlipped(f => !f); }}>
                      <RotateCw className="h-4 w-4 mr-1" /> Flip
                    </Button>
                  </div>
                </div>
                <RichContent text={flipped ? card.answer : card.question} />
                {!flipped && <p className="text-xs text-muted-foreground mt-6">Tap card or press Flip to reveal answer.</p>}
              </div>
            )}
          </Card>
        </div>

        {!locked && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button
              variant={cardLevel === "practice" ? "default" : "outline"}
              className={cardLevel === "practice" ? "bg-amber-500 hover:bg-amber-500/90 text-black" : "border-amber-500/40 text-amber-400 hover:text-amber-300"}
              onClick={(e) => { e.stopPropagation(); mark("practice"); }}
            >
              <AlertCircle className="h-4 w-4 mr-1" /> Needs practice
            </Button>
            <Button
              variant={cardLevel === "got" ? "default" : "outline"}
              className={cardLevel === "got" ? "bg-emerald-500 hover:bg-emerald-500/90 text-black" : "border-emerald-500/40 text-emerald-400 hover:text-emerald-300"}
              onClick={(e) => { e.stopPropagation(); mark("got"); }}
            >
              <ThumbsUp className="h-4 w-4 mr-1" /> Got it
            </Button>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button variant="outline" disabled={idx === 0} onClick={() => { setIdx(i => i - 1); setFlipped(false); }}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button variant="outline" disabled={idx === cards.length - 1} onClick={goNext}>
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </main>
    </div>
  );
}
