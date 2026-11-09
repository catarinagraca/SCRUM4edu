import { useEffect, useState } from 'react'
import './css/IntroGuide.css'

const WORDS_PER_MINUTE = 130
const SECONDS_PER_PAUSE = 30

// Each section is read aloud by the teacher.
// "pause" boxes are teacher-only: they are NOT read aloud, but they add time.
const sections = [
  {
    emoji: '😩',
    title: 'Imagine this',
    color: 'salmon',
    paragraphs: [
      `Imagine this. Your teacher announces a group project. Four people, two weeks. And you already know how it goes.`,
      `One person does almost everything. One person disappears until the night before. One person says "I'll do it later", and never does. And one person, maybe you, quietly gets very annoyed.`,
      `It happens everywhere, in every country, at every age. And today I'm going to show you a way to make it stop. It's called Scrum. It takes ten minutes to explain, and it works.`,
    ],
    pause: {
      label: 'Ask the class',
      text: `Raise your hand if you have ever been the person doing all the work. Keep your hand up if you have been the person who did nothing. (Smile. Everyone is honest here.)`,
    },
  },
  {
    emoji: '🚀',
    title: 'This project is yours',
    color: 'yellow',
    paragraphs: [
      `Here is the big idea. From today, this project belongs to you. Not to me. To you.`,
      `You decide how to split the work. You decide who does what. You decide how to solve problems. My job is not to boss you around. My job is to help when you get stuck.`,
      `That may sound scary, but it is actually a gift. People care more about things they own. When a project is yours, you stop asking "What does the teacher want?" and you start asking "What do we want to build?"`,
    ],
  },
  {
    emoji: '📋',
    title: 'Make the work visible',
    color: 'mint',
    extra: 'board',
    paragraphs: [
      `Scrum starts with one simple rule: make all the work visible. Picture a board with three columns. The first is called To Do. The second is called Doing. The third is called Done.`,
      `Now take every task in your project and write it on a sticky note. "Research sources." "Draft the introduction." "Make the slides." Every note starts in To Do. When you begin a task, you put your name on it and move it to Doing. When you finish, it moves to Done. That's it.`,
      `Now look at what happens. Nobody can hide, because everyone's name is on the board. Nobody gets forgotten, because every contribution shows up. And nobody has to chase anyone, because you can see the progress with your own eyes. The board does the nagging for you.`,
    ],
    pause: {
      label: 'Quick activity',
      text: `Ask for three tasks the class would put on a board for a project about their favourite topic. Write them on the whiteboard as sticky notes.`,
    },
  },
  {
    emoji: '👩‍💻',
    title: 'Meet a team',
    color: 'yellow',
    paragraphs: [
      `Let me show you with a story. Meet Ana, Rui, Mia, and Leo. They have a project about climate change.`,
      `On day one, they write every task on sticky notes. Leo picks the topic and moves his note to Done before lunch. Ana takes "Research sources". Rui drafts the introduction. Mia starts the slides.`,
      `On day three, Ana is stuck. She can't find good sources. At the daily check-in, she says it out loud, and Rui, who just finished his introduction, jumps in to help. Problem solved in ten minutes.`,
      `Without Scrum, nobody would have noticed until the night before the deadline. Look at what happened. Nobody was a hero, and nobody was a ghost. They simply helped each other, because they could see what was going on.`,
    ],
  },
  {
    emoji: '🏃',
    title: 'Work in sprints',
    color: 'salmon',
    paragraphs: [
      `Now let's talk about time. Big projects feel endless, so we cut them into small pieces called sprints. A sprint is a short stretch of time, usually one or two weeks.`,
      `At the start of every sprint, your team picks a small number of tasks and promises to finish them. At the end, you show what is really done.`,
      `Think of it like a video game. You don't beat the whole game in one go. You beat one level, check your score, and then plan the next level. Small steps, real progress, and no panic the night before the deadline.`,
    ],
  },
  {
    emoji: '🎭',
    title: 'Three roles',
    color: 'mint',
    paragraphs: [
      `Every team needs a few roles, and Scrum has three.`,
      `First, the Product Owner. This person keeps the big picture. They ask, "What are we building, and what matters most?" They help the team decide which tasks come first.`,
      `Second, the Scrum Master. This is not the boss. Think of them as the team's coach. They make sure the routine is followed, and they help remove anything that is blocking the team.`,
      `And third, the Developers. In your project, that's the people who build the thing: researching, writing, designing, presenting. And here is the important part. In your teams, everyone does real work, including the Product Owner and the Scrum Master. Nobody gets to just watch. You can even swap roles in the next sprint, so everyone tries each one.`,
    ],
  },
  {
    emoji: '⏱️',
    title: 'The five-minute check-in',
    color: 'yellow',
    paragraphs: [
      `So how do you stay on track? With a tiny meeting called the Daily Scrum. It takes five minutes, maybe less, and you can even do it standing up.`,
      `Each person answers three questions. What did I do since last time? What will I do next? And is anything blocking me?`,
      `That's all. No long speeches. No excuses. If someone is blocked, the team helps. And because you check in often, you find problems early, instead of finding them on the last day. Five minutes a day can save you hours of stress.`,
    ],
    pause: {
      label: 'Practice it',
      text: `Pick three volunteers. Each answers the three questions about their weekend in 20 seconds: what I did, what I'll do next, what's blocking me.`,
    },
  },
  {
    emoji: '🔁',
    title: 'Show it, then improve it',
    color: 'salmon',
    paragraphs: [
      `At the end of every sprint, two things happen.`,
      `First, the Sprint Review. You show what you built. Not what you planned. What you actually finished. Think of it as a mini show-and-tell for your work.`,
      `Second, the Retrospective. This is your team looking in the mirror. What went well? What didn't? And what is one thing we will do differently next time?`,
      `This is the secret power of Scrum. Every sprint, you get a little better. Not because someone told you to, but because you noticed it yourselves. Mistakes stop being embarrassing and start being useful.`,
    ],
  },
  {
    emoji: '⚖️',
    title: 'Why this is fairer',
    color: 'mint',
    paragraphs: [
      `Let's put it all together. You own the project. You show the work on a board. You work in short sprints. You have clear roles. You check in every day. And you improve after every sprint.`,
      `And here is what that means for fairness. Everyone's contribution is visible. Everyone has a voice. And when someone isn't pulling their weight, the team sees it early and can talk about it kindly, long before it becomes a fight.`,
      `Scrum doesn't make group work magic. It makes it honest.`,
    ],
  },
  {
    emoji: '🎯',
    title: 'Your first mission',
    color: 'yellow',
    paragraphs: [
      `So here is your first mission. In the next few minutes, get into your teams. Choose your first Scrum Master and your first Product Owner.`,
      `Grab some paper and draw your board with three columns. Write down at least five tasks. Then pick one task, put your name on it, and move it to Doing.`,
      `Congratulations. You have just started your first sprint. Welcome to Scrum. Now it's your project. Let's build something great.`,
    ],
  },
]

function countWords(text) {
  return text.trim().split(/\s+/).length
}

// Key Scrum words get a highlighter-pen effect automatically.
const KEY_TERMS =
  /(To Do|Doing|Done|Daily Scrum|Sprint Review|Retrospective|Product Owner|Scrum Master|Developers|sprints?|Scrum)/g

function highlight(text) {
  return text
    .split(KEY_TERMS)
    .map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part))
}

// A tiny animated board: sticky notes move from To do to Done in a loop.
const COLUMNS = ['To do', 'Doing', 'Done']
const BOARD_NOTES = [
  { id: 'Research sources', who: 'Ana', color: 'yellow', path: [0, 0, 1, 1, 2, 2] },
  { id: 'Draft intro', who: 'Rui', color: 'mint', path: [0, 1, 1, 2, 2, 2] },
  { id: 'Make slides', who: 'Mia', color: 'salmon', path: [0, 0, 0, 1, 1, 2] },
]

function MiniBoard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 6), 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mini-board" aria-hidden="true">
      {COLUMNS.map((name, col) => (
        <div key={name} className="mini-col">
          <span className="mini-col-title">{name}</span>
          {BOARD_NOTES.filter((n) => n.path[step] === col).map((n) => (
            <div key={n.id} className={`mini-note mini-note--${n.color}`}>
              {n.id}
              <small>{n.who}</small>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function IntroGuide() {
  const [progress, setProgress] = useState(0)
  const [confetti, setConfetti] = useState([])

  // Reading time: spoken words + a little time for each pause activity.
  const spokenWords = sections.reduce(
    (total, s) =>
      total + countWords(s.title) + s.paragraphs.reduce((t, p) => t + countWords(p), 0),
    0,
  )
  const pauses = sections.filter((s) => s.pause).length
  const totalSeconds = (spokenWords / WORDS_PER_MINUTE) * 60 + pauses * SECONDS_PER_PAUSE
  const minutes = Math.max(1, Math.round(totalSeconds / 60))

  // Reading progress bar
  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cards slide in when they scroll into view
  useEffect(() => {
    const cards = document.querySelectorAll('.guide-card')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.15 },
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  function celebrate() {
    const emojis = ['🎉', '⭐', '🚀', '✨', '📋', '💡']
    setConfetti(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        emoji: emojis[i % emojis.length],
      })),
    )
    setTimeout(() => setConfetti([]), 3800)
  }

  return (
    <main className="guide">
      <div className="guide-progress" style={{ width: `${progress}%` }} />

      <header className="guide-header">
        <span className="guide-time">⏱ Estimated reading time: ~{minutes} min</span>
        <h1>
          Scrum in <span className="guide-squiggle">10 minutes</span>
        </h1>
        <p className="guide-subtitle">
          A script to read aloud to your students. Read the text in the cards. The dashed boxes
          are for you only, so don&apos;t read them out.
        </p>
      </header>

      <div className="guide-body">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className={`guide-card guide-card--${section.color}`}
          >
            <div className="guide-card-top">
              <span className="guide-number">{index + 1}</span>
              <span className="guide-emoji" aria-hidden="true">
                {section.emoji}
              </span>
            </div>
            <h2>{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{highlight(p)}</p>
            ))}

            {section.extra === 'board' && <MiniBoard />}

            {section.pause && (
              <aside className="guide-pause">
                <strong>👩‍🏫 {section.pause.label} (teacher only)</strong>
                <p>{section.pause.text}</p>
              </aside>
            )}
          </section>
        ))}
      </div>

      <footer className="guide-footer">
        <p>That&apos;s it. Now it&apos;s their project.</p>
        <button type="button" className="guide-celebrate" onClick={celebrate}>
          🎉 Mission accepted!
        </button>
        {confetti.map((c) => (
          <span
            key={c.id}
            className="confetti-piece"
            style={{ left: `${c.left}%`, animationDelay: `${c.delay}s` }}
          >
            {c.emoji}
          </span>
        ))}
      </footer>
    </main>
  )
}

export default IntroGuide

