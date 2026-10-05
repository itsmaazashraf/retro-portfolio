# 100 legendary engineers and their personal sites

Inspiration research for Maaz's portfolio. 100 engineers whose work shaped software between 1976 and 2026, each one's personal site located and checked in October 2026.

## How this was gathered

- Each URL was fetched (WebFetch, or curl where WebFetch failed). Descriptions come from the fetched text and markup, not screenshots, so visual details are inferred.
- **Status key:** `live`: fetched and working. `archived`: preserved or memorial page, or a dormant project site. `unverified`: found via search but would not load. `none`: no personal site exists.
- **Result:** 70 live, 10 archived, 10 unverified, 10 none.
- **Score:** 1–5, how useful the site is as inspiration for a backend engineer's portfolio. It is not a measure of the person's importance.

## The headline finding

**None of the 100 has a "portfolio" in the Dribbble sense.** There are no hero sections, skill bars, "passionate about" intros, or project-card grids. The legends' sites fall into a few shapes:

1. **The work is the design.** A bare list where each line is something absurdly impressive: Bellard, Dan Luu, Paul Graham, Russ Cox.
2. **The site is itself a tool or artifact.** Brendan Gregg's interactive flame graphs, Ciechanowski's draggable explainers, Julia Evans' DNS playground, Joe Armstrong's wiki.
3. **The voice comes from boundaries and quirks.** Knuth's reward cheques, Lamport's reversed email, Guido's "what I won't do", Pike's deadpan bio.
4. **Numbered, indexed archives.** Dijkstra's EWD-0001…1318, Folklore's rated anecdotes, Lea Verou's numbered posts.

The current site (a plain black text page) already sits in shape 1. The trace prototype in `prototypes/trace.html` is shape 2. The strongest result combines 2 with 3.

## Top 15 (score 5)

| Who | Site | The one idea worth taking |
|---|---|---|
| Donald Knuth | [stanford.edu/~knuth](https://www-cs-faculty.stanford.edu/~knuth/) | Public errata with **reward cheques** for anyone who finds a mistake |
| Rob Pike | [herpolhode.com/rob](http://herpolhode.com/rob/index.html) | A **deadpan bio** mixing true and fake brags, with the real one hidden in the middle |
| Leslie Lamport | [lamport.azurewebsites.net](https://lamport.azurewebsites.net/) | Near-empty page, **email as a reversed string**, an explicit list of what he won't answer |
| Edsger Dijkstra | [cs.utexas.edu/~EWD](https://www.cs.utexas.edu/~EWD/) | 1,000+ **numbered manuscripts** with indexes by number, year and theme |
| Andy Hertzfeld | [folklore.org](https://www.folklore.org/) | Career told as **war-story anecdotes**, sortable by reader rating |
| Joe Armstrong | [joearms.github.io](https://joearms.github.io/) | A **non-linear wiki notebook** instead of a timeline |
| Andrew Kelley | [andrewkelley.me](https://andrewkelley.me/) | Zig next to **synth music and playable game-jam games**, all on one page |
| Brendan Gregg | [brendangregg.com](https://www.brendangregg.com/) | **Interactive flame graphs** (hover, zoom, search), so the site works as a tool |
| Fabrice Bellard | [bellard.org](https://bellard.org/) | An unstyled list where **every line is a shipped system with a proof number** |
| Bret Victor | [worrydream.com](https://worrydream.com/) | **Two bios ("Promotional" and "Real")**, work grouped by era, stated contact etiquette |
| Bartosz Ciechanowski | [ciechanow.ski](https://ciechanow.ski/) | **Draggable explainers.** The reader plays with the system instead of reading about it |
| Dan Luu | [danluu.com](https://danluu.com/) | One flat **MM/YY-dated list of titles**, no CSS, irreverent titles |
| Julia Evans | [jvns.ca](https://jvns.ca/) | **Browser playgrounds** (Mess With DNS) as prominent as the writing |
| Simon Willison | [simonwillison.net](https://simonwillison.net/) | A **recurring absurd benchmark** (a pelican riding a bicycle) run against every new model |
| Patrick McKenzie | [kalzumeus.com](https://www.kalzumeus.com/) | A **running stat in the header** ("4.7 million words") plus a "Standing Invitation" page |

## Patterns across all 100

| Pattern | Who does it | How it could work for Maaz |
|---|---|---|
| **Brag by constraint or size** | Norvig ("spelling corrector in 21 lines"), Stroustrup (page counts), Bellard, DHH | Lead with the measurement: "1500ms → 300ms", "800M identities, <500ms" |
| **Deadpan humour** | Pike, Ritchie's logo history, Tanenbaum's "famous misunderstandings", Hightower's `nocode` (65.9k stars) | A "facts" section in the style of the Jeff Dean Facts / latency-numbers joke |
| **Boundaries as personality** | Guido, Lamport, Larry Wall ("I hate my telephone"), Bret Victor, Kernighan's phishing banner | "What I'll reply to / what I won't" |
| **Read by role, not date** | Spolsky ("New Developer / Tech Lead / Recruiter") | A "start here if you're a…" switch, which is the routing idea from earlier |
| **Visible process** | Lea Verou ("Edit on GitHub"), ESR ("site design notes"), Fowler's Fragments, Willison's TILs | Show the page weight and render time and how the site is built |
| **One human corner** | Kelley (music), Atkinson (photography), Hashimoto (pilot licence), DHH (Le Mans) | One non-work section, kept short |
| **Admit failure** | Yegge ("Good / Bad / Ugly"), Hashimoto ("I don't work on any of those anymore") | Postmortem-style case studies including what went wrong |
| **Intentionally frozen look** | Lattner ("hasn't changed since the early 2000s, and that's the point"), Graham, Ritchie | Pick a look and commit to it |

## Ideas for Maaz that combine these

1. **Trace view + Gregg's flame graph.** Keep the trace waterfall (already prototyped), and add a flame-graph toggle where width = impact instead of time.
2. **A Ciechanowski-style playable demo.** "Fire a request" at the router: two lanes race, the old 1500ms path against the new 300ms path. Or type a query and watch it fan out across search shards.
3. **Knuth's errata cheque, for architecture.** "Find a real flaw in one of my design notes and I'll [buy you a coffee / send a postcard from Lahore]." Keep a public list of everyone who has found one.
4. **Dijkstra numbering.** Write up each system as a numbered design note: `MA-001 router rearchitecture`, `MA-002 800M identity search`…
5. **Pike's deadpan bio + Jeff Dean Facts.** "Maaz's p99 is other people's p50."
6. **Lamport's and Guido's boundaries.** Email as a tiny puzzle, plus a short "please don't send me…" list.
7. **McKenzie's live stat.** A header counter such as "requests routed since you opened this page", derived from real throughput, clearly labelled as an estimate.

## All 100

### A. Pioneers & systems

| # | Name | Known for | Site | Status | What's distinctive | Score |
|---|---|---|---|---|---|---|
| 1 | Donald Knuth | TAOCP, TeX | [stanford.edu/~knuth](https://www-cs-faculty.stanford.edu/~knuth/) | live | Reward cheques, "Infrequently Asked Questions", a pipe organ page, a "(don't click here)" link | 5 |
| 2 | Ken Thompson | Unix, UTF-8, Go | [9p.io/cm/cs/who/ken](https://9p.io/cm/cs/who/ken/) | unverified | Only Bell Labs and Plan 9 mirrors | 1 |
| 3 | Dennis Ritchie | C, Unix | [bell-labs.com/usr/dmr/www](https://www.bell-labs.com/usr/dmr/www/) | archived | Family memorial note above a dry joke history of Bell Labs logo changes, and the 1971 Unix manual | 4 |
| 4 | Brian Kernighan | K&R C, AWK | [princeton.edu/~bwk](https://www.cs.princeton.edu/~bwk/) | live | All-caps phishing-warning banner at the top, an Erdős–Bacon number | 4 |
| 5 | Rob Pike | Plan 9, UTF-8, Go | [herpolhode.com/rob](http://herpolhode.com/rob/index.html) | live | Deadpan bio ("Olympic silver medal in Archery") | 5 |
| 6 | Bjarne Stroustrup | C++ | [stroustrup.com](https://www.stroustrup.com/) | live | Book blurbs with page counts ("254 pages + index") | 3 |
| 7 | Bill Joy | vi, BSD, Sun | none | none | No personal site | 1 |
| 8 | Richard Stallman | GNU, Emacs | [stallman.org](https://stallman.org/) | live | One huge hand-edited page, no JS, reasoning left in HTML comments | 4 |
| 9 | Leslie Lamport | Paxos, TLA+, LaTeX | [lamport.azurewebsites.net](https://lamport.azurewebsites.net/) | live | Three links, a reversed-string email, "won't answer technical questions" | 5 |
| 10 | Butler Lampson | Alto, systems design | [bwlampson.site](https://bwlampson.site/) | live | One-paragraph, short and full bios; "tiretracks" diagrams of how ideas moved | 4 |
| 11 | Barbara Liskov | CLU, LSP | [csail.mit.edu profile](https://www.csail.mit.edu/person/barbara-liskov) | live | Institutional profile only; her own homepage would not load | 2 |
| 12 | Niklaus Wirth | Pascal, Oberon | [ethz.ch/wirth](https://people.inf.ethz.ch/wirth/) | live | Plain page, books as PDFs, "see news.txt" | 3 |
| 13 | Edsger Dijkstra | Structured programming | [utexas.edu/~EWD](https://www.cs.utexas.edu/~EWD/) | archived | 1,000+ numbered EWD notes, crowd-transcribed | 5 |
| 14 | Tony Hoare | Quicksort, CSP | [ox.ac.uk/people/tony.hoare](https://www.cs.ox.ac.uk/people/tony.hoare/) | archived | Oxford profile, now with an "In Memoriam" notice | 2 |
| 15 | Alan Kay | Smalltalk, Dynabook | [vpri.org](https://vpri.org/) | archived | Dormant institute site; headings phrased as questions | 3 |
| 16 | Andrew Tanenbaum | MINIX | [vu.nl/~ast](https://www.cs.vu.nl/~ast/) | live | Hand-built page, the "Ken Brown incident" story, the RFID-virus-on-a-cat story | 4 |
| 17 | Steve Wozniak | Apple I/II | [woz.org](https://woz.org/) | live | Galleries, "Woz Speaks" booking page | 2 |
| 18 | Bill Atkinson | MacPaint, HyperCard | [billatkinson.com](https://www.billatkinson.com/) | live | Only nature photography, no code at all | 3 |
| 19 | Andy Hertzfeld | Mac system software | [folklore.org](https://www.folklore.org/) | archived | 123 rated anecdotes ("-2000 Lines Of Code") | 5 |
| 20 | Dave Cutler | Windows NT, VMS | none | none | No personal site | 1 |

### B. Languages & the web

| # | Name | Known for | Site | Status | What's distinctive | Score |
|---|---|---|---|---|---|---|
| 21 | Tim Berners-Lee | The Web | [w3.org/People/Berners-Lee](https://www.w3.org/People/Berners-Lee/) | live | Dead links annotated with the date they broke | 3 |
| 22 | Guido van Rossum | Python | [gvanrossum.github.io](https://gvanrossum.github.io/) | live | "What I will NOT do" section, a name pronunciation guide | 4 |
| 23 | James Gosling | Java | [nighthacks.com](https://nighthacks.com/) | live | Root page is one link to Mastodon | 1 |
| 24 | Larry Wall | Perl | [wall.org/~larry](http://www.wall.org/~larry/) | live | "Perpetually under construction", a geek code block, "I hate my telephone" | 4 |
| 25 | Yukihiro Matsumoto | Ruby | [matz.rubyist.net](https://matz.rubyist.net/) | live | Japanese diary since 2011; "forgot how to use images" | 3 |
| 26 | Brendan Eich | JavaScript | [brendaneich.com](https://www.brendaneich.com/) | live | WordPress blog, "/be" sign-off | 2 |
| 27 | Anders Hejlsberg | Turbo Pascal, C#, TypeScript | none | none | No personal site | 1 |
| 28 | Chris Lattner | LLVM, Swift | [nondot.org/sabre](http://nondot.org/sabre/) | live | Deliberately frozen in the early 2000s, "and that's kind of the point" | 4 |
| 29 | Rich Hickey | Clojure | none | none | Talks and papers are the portfolio | 1 |
| 30 | José Valim | Elixir | [dashbit.co/blog](https://dashbit.co/blog) | live | Company blog; "Made with <3 using Elixir" footer | 2 |
| 31 | Joe Armstrong | Erlang | [joearms.github.io](https://joearms.github.io/) | archived | TiddlyWiki "non-linear personal web notebook" | 5 |
| 32 | Graydon Hoare | Rust | [graydon2.dreamwidth.org](https://graydon2.dreamwidth.org/) | unverified | Long manifesto essays ("Always bet on text") | 3 |
| 33 | Andrew Kelley | Zig | [andrewkelley.me](https://andrewkelley.me/) | live | One page: posts, projects, music, playable games | 5 |
| 34 | Rasmus Lerdorf | PHP | [toys.lerdorf.com](http://toys.lerdorf.com/) | live | "Mostly a note to myself": from NAS builds to chocolate ice cream | 4 |
| 35 | Douglas Crockford | JSON | [crockford.com](https://www.crockford.com/) | live | Flat list of tools and opinionated essays | 3 |
| 36 | John Resig | jQuery | [johnresig.com](https://johnresig.com/) | live | Centrepiece is a Japanese woodblock print search engine | 4 |
| 37 | Ryan Dahl | Node.js, Deno | [tinyclouds.org](http://tinyclouds.org/) | live | 9 essays total, "I hate almost all software" | 4 |
| 38 | Evan You | Vue, Vite | [evanyou.me](https://evanyou.me/) | live | One paragraph: badminton, Gundam, watches, karaoke | 3 |
| 39 | Dan Abramov | React | [overreacted.io](https://overreacted.io/) | live | Post list as the homepage, each post with a one-line hook | 4 |
| 40 | DHH | Rails, 37signals | [dhh.dk](https://dhh.dk/) | live | Hard numbers as credibility; ends on Le Mans photos | 3 |

### C. Systems, infrastructure, distributed (closest to Maaz's work)

| # | Name | Known for | Site | Status | What's distinctive | Score |
|---|---|---|---|---|---|---|
| 41 | Linus Torvalds | Linux, Git | [github.com/torvalds](https://github.com/torvalds) | none | Pins the kernel next to "Linus learns analog circuits" | 2 |
| 42 | Jeff Dean | MapReduce, Bigtable, TensorFlow | Google Research profile | unverified | Fame lives in the "Jeff Dean Facts" meme | 2 |
| 43 | Sanjay Ghemawat | GFS, Spanner | Google Research profile | unverified | No personal site found | 1 |
| 44 | Werner Vogels | AWS CTO | [allthingsdistributed.com](https://www.allthingsdistributed.com/) | live | Origin stories of systems (Lambda) as featured posts | 3 |
| 45 | Marc Brooker | AWS distributed systems | [brooker.co.za/blog](https://brooker.co.za/blog/) | live | Plain archive grouped by year, "Is this blog written by AI?" | 4 |
| 46 | Martin Kleppmann | DDIA, CRDTs | [martin.kleppmann.com](https://martin.kleppmann.com/) | live | One long academic page where depth is the design | 3 |
| 47 | Kyle Kingsbury | Jepsen | [aphyr.com](https://aphyr.com/) | live | Long sagas (161 calls to a moving company), Photos tab | 4 |
| 48 | Brendan Gregg | Flame graphs, eBPF | [brendangregg.com](https://www.brendangregg.com/) | live | Interactive SVG flame graphs, a "Crypt" section for old work | 5 |
| 49 | Bryan Cantrill | DTrace, Oxide | [bcantrill.dtrace.org](https://bcantrill.dtrace.org/) | live | 20-year archive mixing technical posts and elegies | 3 |
| 50 | Charity Majors | Observability, Honeycomb | [charity.wtf](https://charity.wtf/) | live | The `.wtf` domain carries the personality | 2 |
| 51 | Salvatore Sanfilippo | Redis | [antirez.com](https://antirez.com/) | live | Relative dates ("69 days ago") make it feel alive | 3 |
| 52 | D. Richard Hipp | SQLite | [sqlite.org/crew.html](https://sqlite.org/crew.html) | none | Removed bios deliberately: "a lot of crazy people in the world" | 2 |
| 53 | Fabrice Bellard | QEMU, FFmpeg, QuickJS | [bellard.org](https://bellard.org/) | live | Bare list: JSLinux, 2.7 trillion digits of π… | 5 |
| 54 | Mitchell Hashimoto | Terraform, Ghostty | [mitchellh.com](https://mitchellh.com/) | live | "I don't work on any of those anymore"; pilot ratings | 4 |
| 55 | Kelsey Hightower | Kubernetes the Hard Way | [github.com/kelseyhightower](https://github.com/kelseyhightower) | none | `nocode`: "Write nothing; deploy nowhere" (65.9k stars) | 4 |
| 56 | Jay Kreps | Kafka, "The Log" | blog.empathybox.com | unverified | Known mainly for one canonical essay | 2 |
| 57 | Michael Stonebraker | Postgres, Ingres | [csail.mit.edu profile](https://www.csail.mit.edu/person/michael-stonebraker) | archived | Old home directory is an empty Apache index | 2 |
| 58 | Jim Gray | Transactions | [jimgray.azurewebsites.net](https://jimgray.azurewebsites.net/) | archived | Preserved frameset site with live data demos (SkyServer) | 4 |
| 59 | Russ Cox | Go, RE2 | [swtch.com/~rsc](https://swtch.com/~rsc/) | live | Opens with two jokes and a `new.gif` badge | 4 |
| 60 | Brad Fitzpatrick | memcached, LiveJournal | [bradfitz.com](https://bradfitz.com/) | live | One-line-per-era timeline back to 1998 | 3 |

### D. Writers, craft & process

| # | Name | Known for | Site | Status | What's distinctive | Score |
|---|---|---|---|---|---|---|
| 61 | Martin Fowler | Refactoring | [martinfowler.com](https://martinfowler.com/) | live | "Bliki": evergreen pages plus dated Fragments | 3 |
| 62 | Kent Beck | TDD, XP | [newsletter.kentbeck.com](https://newsletter.kentbeck.com/) | live | A question as the title ("Tidy First?") | 2 |
| 63 | Ward Cunningham | The wiki | [c2.com/~ward](https://c2.com/~ward/) | live | Playful category names ("You call this interactive?"), "(strange)" tags | 4 |
| 64 | Robert C. Martin | Clean Code | [blog.cleancoder.com](https://blog.cleancoder.com/) | live | Bare dated title list, no summaries | 1 |
| 65 | Joel Spolsky | Joel Test, Stack Overflow | [joelonsoftware.com](https://www.joelonsoftware.com/) | live | Essays curated by reader role | 4 |
| 66 | Jeff Atwood | Stack Overflow, Discourse | [blog.codinghorror.com](https://blog.codinghorror.com/) | live | Self-deprecating voice, a Reading page | 2 |
| 67 | Paul Graham | Essays, YC | [paulgraham.com](https://paulgraham.com/) | live | Table layout, "if you're not sure which to read, try these three" | 4 |
| 68 | Peter Norvig | AI, spelling corrector | [norvig.com](https://norvig.com/) | live | Brag by constraint: "…in 21 lines" | 4 |
| 69 | Raymond Chen | The Old New Thing | [devblogs.microsoft.com/oldnewthing](https://devblogs.microsoft.com/oldnewthing/) | live | Why legacy systems are the way they are; his necktie has its own Twitter | 3 |
| 70 | Eric S. Raymond | Cathedral & Bazaar | [catb.org/~esr](http://www.catb.org/~esr/) | live | "Site design notes", load-time promise, Valid XHTML badges | 4 |
| 71 | Jamie Zawinski | Netscape, XScreenSaver | [jwz.org/blog](https://www.jwz.org/blog/) | unverified | Blog since 1994 (would not load for us) | 3 |
| 72 | Dan Luu | Latency, postmortems | [danluu.com](https://danluu.com/) | live | No CSS, MM/YY titles, rule separating free from paid posts | 5 |
| 73 | Julia Evans | Zines, Mess With DNS | [jvns.ca](https://jvns.ca/) | live | Playgrounds next to posts, a "not about computers" category | 5 |
| 74 | Simon Willison | Django, Datasette | [simonwillison.net](https://simonwillison.net/) | live | Parallel streams (TILs, quotes, notes), the pelican benchmark | 5 |
| 75 | Will Larson | Staff Eng | [lethain.com](https://lethain.com/) | live | Whole archive on one page, best posts starred | 3 |
| 76 | Steve Yegge | Platform rant | [steve-yegge.blogspot.com](https://steve-yegge.blogspot.com/) | live | Frozen since 2018; Good/Bad/Ugly sections | 3 |
| 77 | Avery Pennarun | Tailscale | [apenwarr.ca](https://apenwarr.ca/) | live | One-line disclaimer up top, rants tied to real projects | 3 |
| 78 | Hillel Wayne | TLA+ | [hillelwayne.com](https://hillelwayne.com/) | live | Clearly marked April 1st satire posts | 4 |
| 79 | Patrick McKenzie | Bits about Money | [kalzumeus.com](https://www.kalzumeus.com/) | live | Running "4.7 million words" stat, "Standing Invitation" | 5 |
| 80 | Daniel J. Bernstein | qmail, Curve25519 | [cr.yp.to](https://cr.yp.to/) | live | A subdomain per project, mirror links | 4 |

### E. Games, graphics, visual & creative

| # | Name | Known for | Site | Status | What's distinctive | Score |
|---|---|---|---|---|---|---|
| 81 | John Carmack | Doom/Quake engines | [.plan archive](https://github.com/ESWAT/john-carmack-plan-archive) | archived | Dated `.plan` dev diaries, community-mirrored | 3 |
| 82 | John Romero | Doom | [rome.ro](https://rome.ro/) | live | Whole site themed on one iconic artifact | 3 |
| 83 | Tim Sweeney | Unreal Engine | none | none | X and corporate pages only | 1 |
| 84 | Casey Muratori | Handmade Hero | [caseymuratori.com](https://caseymuratori.com/) | live | One flat Table of Contents page | 2 |
| 85 | Jonathan Blow | Braid, The Witness | [number-none.com/blow](http://number-none.com/blow/) | unverified | Code-cleanup posts dissecting his own old code | 2 |
| 86 | Bret Victor | Dynamicland | [worrydream.com](https://worrydream.com/) | live | "Promotional bio" and "Real bio"; work grouped by era | 5 |
| 87 | Mike Bostock | D3.js | [bost.ocks.org/mike](https://bost.ocks.org/mike/) | live | Each piece as a thumbnail plus date, a catalogue of artifacts | 3 |
| 88 | Bartosz Ciechanowski | Explorable essays | [ciechanow.ski](https://ciechanow.ski/) | live | Draggable WebGL sandboxes inside long essays | 5 |
| 89 | Andrej Karpathy | nanoGPT, Tesla Autopilot | [karpathy.ai](https://karpathy.ai/) | live | Two static files, a timeline with jokes, a speedcubing note | 3 |
| 90 | Lea Verou | CSS WG | [lea.verou.me](https://lea.verou.me/) | live | Numbered posts, "Edit on GitHub" on every page | 3 |
| 91 | Inigo Quilez | Shadertoy, SDFs | [iquilezles.org](https://iquilezles.org/) | unverified | 100+ articles of procedural graphics | 4 |
| 92 | Ken Perlin | Perlin noise | [nyu.edu/~perlin](https://mrl.cs.nyu.edu/~perlin/) | live | Opens with a compilable Mandelbrot one-liner in C | 4 |
| 93 | Bram Moolenaar | Vim | [vim.org](https://www.vim.org/) | archived | Charityware notice for children in Uganda | 2 |
| 94 | Margaret Hamilton | Apollo flight software | none | none | No personal site found | 1 |
| 95 | Radia Perlman | Spanning Tree Protocol | none found | unverified | No homepage could be verified | 1 |
| 96 | Sophie Wilson | ARM instruction set | sophie.org.uk | unverified | Search hit only; connection refused | 1 |
| 97 | Andreas Kling | SerenityOS, Ladybird | [awesomekling.github.io](https://awesomekling.github.io/) | live | "I like computers!", `:^)` sign-off | 3 |
| 98 | Mike Pall | LuaJIT | [luajit.org](https://luajit.org/) | live | Project site; the no-tracking privacy statement is a feature | 2 |
| 99 | Rich Harris | Svelte | none | none | Domain redirects to Bluesky | 2 |
| 100 | Josh W. Comeau | CSS/React educator | [joshwcomeau.com](https://www.joshwcomeau.com/) | live | One hidden interaction, later written up as its own post | 4 |

## Caveats

- WebFetch returns text, so "visual" claims are inferred from markup. Open the top 15 in a browser before borrowing a look.
- Some batch D quirks (e.g. Paul Graham's Roman-numeral footer) come from a summarized fetch, not raw HTML.
- Sites change. Everything here reflects October 2026.
