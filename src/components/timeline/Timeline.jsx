import { useState, useRef, useEffect } from "react";

const timelineEvents = [
  {
    id: 1,
    date: "April 1,2026",
    title: "Round 1 Start",

    side: "left",
  },
  {
    id: 2,
    date: "April 10, 2026",
    title: "Round 1 Final Submissions",

    side: "right",
  },
  {
    id: 3,
    date: "April 15, 2026",
    title: "Round 1 Results Declaration",
    side: "left",
  },
  {
    id: 4,
    date: "April 24, 2026",
    title: "Round 2 Start",
    side: "right",
  },
  {
    id: 5,
    date: "April 25, 2026",
    title: "Round 2 Final Submissions",
    side: "left",
  },
  {
    id: 6,
    date: "April 25, 2026",
   
    title: "Closing Ceremony",
   
    side: "right",
  },
];

const TAG_STYLES = {
  Keynote:  { border: "rgba(220,38,38,0.45)",  bg: "rgba(168,85,247,0.08)", color: "#fca5a5" },
  Workshop: { border: "rgba(168,85,247,0.45)", bg: "rgba(168,85,247,0.12)", color: "#c4b5fd" },
  Contest:  { border: "rgba(190,18,60,0.45)",  bg: "rgba(244,63,94,0.08)",  color: "#fda4af" },
  Panel:    { border: "rgba(139,92,246,0.4)",  bg: "rgba(139,92,246,0.08)", color: "#ddd6fe" },
  Talk:     { border: "rgba(185,28,28,0.45)",  bg: "rgba(239,68,68,0.08)",  color: "#f87171" },
  Ceremony: { border: "rgba(168,85,247,0.45)", bg: "rgba(168,85,247,0.1)",  color: "#e9d5ff" },
};

/* ─── CARD ─── */
function Card({ event }) {
  const [hov, setHov] = useState(false);
  const tag = TAG_STYLES[event.tag] || TAG_STYLES.Talk;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        border: `1px solid ${hov ? "rgba(220,38,38,0.3)" : "rgba(255,255,255,0.08)"}`,
        background: hov ? "rgba(40,0,30,0.55)" : "rgba(255,255,255,0.025)",
        backdropFilter: "blur(14px)",
        padding: "20px 22px",
        transition: "border-color .35s, background .35s",
        cursor: "default",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* top shimmer */}
      <div style={{
        position:"absolute",top:0,left:0,right:0,height:1,
        background:"linear-gradient(90deg,transparent,rgba(168,85,247,0.6),transparent)",
        opacity: hov ? 1 : 0, transition:"opacity .35s",
      }}/>
      {/* corner glow */}
      <div style={{
        position:"absolute",bottom:-20,right:-20,
        width:100,height:100,borderRadius:"50%",
        background:"radial-gradient(circle,rgba(168,85,247,0.18) 0%,transparent 70%)",
        opacity: hov ? 1 : 0, transition:"opacity .5s",
      }}/>

      <div style={{ position:"relative", zIndex:1 }}>
        <p style={{
          fontFamily:"monospace",fontSize:10,letterSpacing:"0.22em",
          textTransform:"uppercase",color:"rgba(248,113,113,0.6)",marginBottom:6,
        }}>
          {event.date} &bull; {event.time}
        </p>
        <h3 style={{ fontSize:17,fontWeight:700,color:"#fff",marginBottom:8,lineHeight:1.25 }}>
          {event.title}
        </h3>
        {/* <div style={{ display:"flex",alignItems:"center",gap:5,marginBottom:12 }}>
          <span style={{ fontSize:12 }}>📍</span>
          <span style={{ fontSize:12,color:"rgba(255,255,255,0.35)",fontWeight:300 }}>{event.location}</span>
        </div>
        <div style={{ height:1,background:"rgba(255,255,255,0.06)",marginBottom:12 }}/>
        <p style={{ fontSize:13,color:"rgba(255,255,255,0.48)",lineHeight:1.65,fontWeight:300,margin:0 }}>
          {event.description}
        </p> */}
        {/* <div style={{ marginTop:16 }}>
          <span style={{
            display:"inline-block",fontSize:10,fontWeight:700,
            letterSpacing:"0.16em",textTransform:"uppercase",
            padding:"4px 12px",borderRadius:999,
            border:`1px solid ${tag.border}`,background:tag.bg,color:tag.color,
          }}>
            {event.tag}
          </span>
        </div> */}
      </div>
    </div>
  );
}

/* ─── SPINE DOT ─── */
function Dot({ active, visible }) {
  return (
    <div style={{
      width: 18, height: 18, borderRadius:"50%", flexShrink:0,
      background: active ? "#b91c1c" : "rgba(50,0,20,0.9)",
      border: `2px solid ${active ? "#f87171" : "rgba(120,20,60,0.5)"}`,
      transition: "background .5s ease, border-color .5s ease",
      position:"relative",
      animation: active ? "dotPulse 2s ease-in-out infinite" : "none",
    }}>
      {active && (
        <div style={{
          position:"absolute",inset:3,borderRadius:"50%",
          background:"#fca5a5",
        }}/>
      )}
    </div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function Timeline() {
  const [visSet, setVisSet]     = useState(new Set());
  const [activeIdx, setActiveIdx] = useState(-1);
  const rowRefsDesktop = useRef([]);
  const rowRefsMobile = useRef([]);

  useEffect(() => {
    const entries = [];
    rowRefsDesktop.current.forEach((el, i) => {
      if (el) entries.push({ el, i });
    });
    rowRefsMobile.current.forEach((el, i) => {
      if (el) entries.push({ el, i });
    });

    const obs = entries.map(({ el, i }) => {
      const o = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisSet(p => new Set([...p, i]));
            setActiveIdx(i);
          }, i * 100);
        }
      }, { threshold: 0.2 });
      o.observe(el);
      return o;
    });

    return () => obs.forEach(o => o?.disconnect());
  }, []);

  return (
    <section className="timeline-section" style={{ background:"#080000", position:"relative", overflow:"hidden" }}>

      {/* ── CSS ANIMATIONS ── */}
      <style>{`
        .timeline-section { padding: 80px 16px 100px; }
        .timeline-desktop { display: block; }
        .timeline-mobile { display: none; position: relative; padding-left: 40px; }
        .timeline-header { text-align: center; margin-bottom: 72px; }
        @media (max-width: 700px) {
          .timeline-section { padding: 64px 14px 80px; }
          .timeline-header { margin-bottom: 52px; }
        }
        @media (max-width: 480px) {
          .timeline-section { padding: 52px 12px 64px; }
          .timeline-header { margin-bottom: 44px; }
        }
        @media (max-width: 900px) {
          .timeline-desktop { display: none; }
          .timeline-mobile { display: block; }
        }
        @media (max-width: 600px) {
          .timeline-mobile { padding-left: 28px; }
        }
        @keyframes driftA {
          0%  { transform:translate(0,0) scale(1); }
          33% { transform:translate(70px,-45px) scale(1.16); }
          66% { transform:translate(-35px,55px) scale(0.9); }
          100%{ transform:translate(0,0) scale(1); }
        }
        @keyframes driftB {
          0%  { transform:translate(0,0) scale(1); }
          40% { transform:translate(-80px,35px) scale(1.13); }
          75% { transform:translate(45px,-65px) scale(0.93); }
          100%{ transform:translate(0,0) scale(1); }
        }
        @keyframes driftC {
          0%  { transform:translate(0,0) scale(1); }
          50% { transform:translate(55px,75px) scale(1.22); }
          100%{ transform:translate(0,0) scale(1); }
        }
        @keyframes breathe {
          0%,100%{ opacity:.2; }
          50%    { opacity:.44; }
        }
        @keyframes twinkle {
          0%,100%{ opacity:.06; }
          50%    { opacity:.85; }
        }
        @keyframes scan {
          0%  { top:-4px; }
          100%{ top:100%; }
        }
        @keyframes dotPulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(220,38,38,.7),0 0 14px 4px rgba(220,38,38,.4); }
          50%    { box-shadow:0 0 0 7px rgba(220,38,38,0),0 0 24px 9px rgba(220,38,38,.2); }
        }
        @keyframes cardIn {
          from{ opacity:0; transform:translateY(26px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes lineSlide {
          from{ transform:scaleX(0); }
          to  { transform:scaleX(1); }
        }
      `}</style>

      {/* ── BACKGROUND ── */}
      {/* Radial base */}
      <div style={{
        position:"absolute",inset:0,zIndex:0,pointerEvents:"none",
        background:"radial-gradient(ellipse 75% 55% at 18% 25%,rgba(200,15,15,.22) 0%,transparent 68%), radial-gradient(ellipse 60% 70% at 82% 72%,rgba(139,92,246,.22) 0%,transparent 65%), radial-gradient(ellipse 50% 50% at 52% 50%,rgba(80,0,60,.14) 0%,transparent 75%)",
      }}/>
      {/* Drifting orbs */}
      {[
        { top:"8%",  left:"12%", w:580,h:580, c:"rgba(200,25,25,.25)",  bl:100, a:"driftA 20s ease-in-out infinite,breathe 7s ease-in-out infinite" },
        { bottom:"8%",right:"8%",w:520,h:520, c:"rgba(139,92,246,.28)",   bl:110, a:"driftB 25s ease-in-out infinite,breathe 9s ease-in-out infinite 2s" },
        { top:"42%", left:"50%", w:360,h:360, c:"rgba(168,85,247,.22)",   bl:80,  a:"driftC 15s ease-in-out infinite,breathe 5s ease-in-out infinite 1s" },
      ].map((o,i)=>(
        <div key={i} style={{
          position:"absolute",...(o.top?{top:o.top}:{}),
          ...(o.bottom?{bottom:o.bottom}:{}),
          ...(o.left?{left:o.left}:{}),
          ...(o.right?{right:o.right}:{}),
          width:o.w,height:o.h,
          background:`radial-gradient(circle,${o.c} 0%,transparent 70%)`,
          borderRadius:"50%",filter:`blur(${o.bl}px)`,
          animation:o.a,zIndex:0,pointerEvents:"none",
        }}/>
      ))}
      {/* Grid */}
      <div style={{
        position:"absolute",inset:0,zIndex:0,pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(168,85,247,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.05) 1px,transparent 1px)",
        backgroundSize:"64px 64px",
      }}/>
      {/* Scan line */}
      <div style={{
        position:"absolute",left:0,right:0,height:3,
        background:"linear-gradient(90deg,transparent,rgba(255,70,70,.15),transparent)",
        animation:"scan 10s linear infinite",zIndex:0,pointerEvents:"none",
      }}/>
      {/* Stars */}
      {Array.from({length:70}).map((_,i)=>(
        <div key={i} style={{
          position:"absolute",
          top:`${(i*131.7)%100}%`,left:`${(i*93.1)%100}%`,
          width:i%6===0?2:1,height:i%6===0?2:1,borderRadius:"50%",
          background:i%4===0?"rgba(255,110,110,.65)":"rgba(255,255,255,.35)",
          animation:`twinkle ${2.5+(i%5)*.8}s ease-in-out infinite ${(i%7)*.5}s`,
          zIndex:0,pointerEvents:"none",
        }}/>
      ))}

      {/* ── CONTENT ── */}
      <div style={{ position:"relative",zIndex:1,maxWidth:1080,margin:"0 auto" }}>

        {/* Header */}
        <div className="timeline-header">
          <p style={{ fontFamily:"monospace",fontSize:11,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(248,113,113,.55)",marginBottom:14 }}>
            Schedule of Events
          </p>
          {/* <h2 style={{ fontSize:"clamp(26px,5vw,50px)",fontWeight:800,color:"#fff",lineHeight:1.15,margin:0 }}>
            Explore the key events that{" "}
            <span style={{ background:"linear-gradient(90deg,#f87171,#fda4af,#ef4444)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              shape EOS 2026
            </span>
          </h2> */}
        </div>

        {/* ═══ DESKTOP: 3-col CSS Grid ═══ */}
        <div
          className="timeline-desktop"
          style={{ position:"relative" }}
        >
          {/* Ghost spine — full height background track */}
          <div style={{
            position:"absolute",
            left:"50%",top:0,bottom:0,
            width:2,transform:"translateX(-50%)",
            background:"linear-gradient(180deg,transparent,rgba(239,68,68,.13) 8%,rgba(239,68,68,.13) 92%,transparent)",
            zIndex:0,
          }}/>

          {timelineEvents.map((ev, i) => {
            const isLeft  = ev.side === "left";
            const isVis   = visSet.has(i);
            const isActive = i <= activeIdx;

            return (
              <div
                key={ev.id}
                ref={el => (rowRefsDesktop.current[i] = el)}
                style={{
                  display:"grid",
                  gridTemplateColumns:"1fr 60px 1fr",
                  alignItems:"center",
                  marginBottom: i < timelineEvents.length - 1 ? 52 : 0,
                  position:"relative",
                  zIndex:1,
                }}
              >
                {/* ── LEFT cell ── */}
                <div style={{ display:"flex", justifyContent:"flex-end" }}>
                  {isLeft ? (
                    <div style={{
                      width:"100%",
                      opacity: isVis ? 1 : 0,
                      animation: isVis ? "cardIn .65s cubic-bezier(.22,.68,0,1.2) forwards" : "none",
                    }}>
                      <Card event={ev} />
                    </div>
                  ) : (
                    /* Empty left — but still holds the connector stub if needed */
                    <div style={{ width:"100%" }} />
                  )}
                </div>

                {/* ── CENTER cell: dot + two connector lines ── */}
                <div style={{
                  display:"flex",alignItems:"center",justifyContent:"center",
                  position:"relative",height:"100%",
                }}>
                  {/* Left arm */}
                  <div style={{
                    position:"absolute",
                    right:"50%",top:"50%",marginTop:-1,
                    width:"calc(50% - 9px)",height:2,
                    background:"linear-gradient(270deg,transparent,rgba(168,85,247,.6))",
                    transformOrigin:"right center",
                    transform: isVis && isLeft ? "scaleX(1)" : "scaleX(0)",
                    transition: isVis && isLeft ? "transform .45s ease .28s" : "none",
                  }}/>
                  {/* Right arm */}
                  <div style={{
                    position:"absolute",
                    left:"50%",top:"50%",marginTop:-1,
                    width:"calc(50% - 9px)",height:2,
                    background:"linear-gradient(90deg,transparent,rgba(239,68,68,.65))",
                    transformOrigin:"left center",
                    transform: isVis && !isLeft ? "scaleX(1)" : "scaleX(0)",
                    transition: isVis && !isLeft ? "transform .45s ease .28s" : "none",
                  }}/>
                  {/* Dot */}
                  <Dot active={isActive} visible={isVis} />
                </div>

                {/* ── RIGHT cell ── */}
                <div style={{ display:"flex", justifyContent:"flex-start" }}>
                  {!isLeft ? (
                    <div style={{
                      width:"100%",
                      opacity: isVis ? 1 : 0,
                      animation: isVis ? "cardIn .65s cubic-bezier(.22,.68,0,1.2) forwards" : "none",
                    }}>
                      <Card event={ev} />
                    </div>
                  ) : (
                    <div style={{ width:"100%" }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ═══ MOBILE: left-spine single column ═══ */}
        <div
          className="timeline-mobile"
        >
          {/* Spine */}
          <div style={{
            position:"absolute",left:10,top:0,bottom:0,width:2,
            background:"linear-gradient(180deg,transparent,rgba(239,68,68,.2) 5%,rgba(239,68,68,.2) 95%,transparent)",
          }}/>

          {timelineEvents.map((ev, i) => {
            const isVis   = visSet.has(i);
            const isActive = i <= activeIdx;

            return (
              <div
                key={ev.id}
                ref={el => { rowRefsMobile.current[i] = el; }}
                style={{ position:"relative", marginBottom: i < timelineEvents.length - 1 ? 36 : 0 }}
              >
                {/* Dot on spine */}
                <div style={{
                  position:"absolute",
                  left:-39,
                  top:20,
                  transform:"translateX(50%)",
                  zIndex:2,
                }}>
                  <Dot active={isActive} visible={isVis} />
                </div>

                {/* Horizontal arm */}
                <div style={{
                  position:"absolute",left:-20,top:28,
                  width:20,height:2,
                  background:"linear-gradient(90deg,rgba(239,68,68,.5),rgba(239,68,68,.1))",
                  transformOrigin:"left center",
                  transform: isVis ? "scaleX(1)" : "scaleX(0)",
                  transition: isVis ? "transform .4s ease .2s" : "none",
                }}/>

                <div style={{
                  opacity: isVis ? 1 : 0,
                  animation: isVis ? "cardIn .65s cubic-bezier(.22,.68,0,1.2) forwards" : "none",
                }}>
                  <Card event={ev} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}