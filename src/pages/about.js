import React from "react"
import Layout from "../components/Layout/layout"
import Title from "../components/Title/title"

export default () => (
  <Layout>
    <Title text="About Me" />
    <p>
      I am an aspiring software developer and fueled by a passion for learning.
      As I began my Computer Science curriculum, what started as a simple
      interest in code quickly grew to encompass many different tools and
      fields. Below is a snapshot of my current interests. This list is always
      changing and evolving, so keeping this list updated may be too much of a
      task!
    </p>

    <ul>
      <li>
        <p>
          <b>Computer Architecture:</b> I was surprised at how much I enjoyed my
          System Hardware and Architecture course, and I believe it led me to
          understand programming on an even deeper level. A few months before
          the course, Spectre/Meltdown were discovered. I remember revisiting
          the attacks as I was researching predictive branching in processors
          and was amazed at how it worked. I became very interested in learning
          how memory and caches are used in the system. I supplemented my
          learning with the{" "}
          <a href="https://www.nand2tetris.org/">nand2tetris</a> program and
          found it very beneficial. It really helped me solidify my
          understanding of logic gates and how they combine to form basic
          circuitry. Additionally, learning I can use boolean algebra to
          simplify circuits was very helpful.
        </p>
      </li>
      <li>
        <p>
          <b>Cyber Security:</b> I find the landscape of cyber security very
          interesting. While I would mainly focused on hardening the code or the
          server hosting the application, if an attacker was able to social
          engineer an attack vector to the physical my efforts would be
          pointless. By learning how a system can be attacked or exploited, I
          believe I can become a better developer. I recently began taking part
          in some online CTF exercises to learn how attackers can gain control
          over a system or exfil data. I found my way into Hack The Box, but
          thought I might be jumping in the deep end a little soon and switched
          to picoctf to build some fundamentals. I find the exercises to be
          engaging and plan to start tackling Hack The Box soon.
        </p>
      </li>
      <li>
        <p>
          <b>Docker:</b> I've quickly fallen in love with Docker. Being able to
          spin up a minimal linux environment in seconds is extremely useful.
          Add to that the ability to script out the setup of an entire
          development environment, and it has quickly become one of my favorite
          tools. I have experimented some with Docker Swarm and want to do more
          research into Kubernetes.
        </p>
      </li>
      <li>
        <p>
          <b>Linux:</b> While my daily driver is a Windows machine, I knew that
          learning how to operate in any sort of *nix environment was important.
          I've installed various OSs (Ubuntu, Arch, Qubes, etc) on old laptops,
          Raspberry Pis, and virtual private servers, but I mainly use local
          virtual machines now for learning. In my day job, I use Windows and
          ssh into my linux machine, so I wanted to replicate this workflow at
          home. I have become quite comfortable working from a CLI, and actually
          find myself spinning up machines because I prefer the combination of
          Tmux + VIM.
        </p>
      </li>
      <li>
        <p>
          <b>Programming:</b> I have worked primarily with Java, JavaScript, and
          Python. However, I have experimented with several other languages (C,
          C++, Go, Haskell, R, PHP). I started with Java, but quickly found out
          that by exploring the fundamental concepts of programming and
          analytical thinking, I am able to try out many different languages. I
          try to place an emphasis on learning better ways to program, and I
          have enjoyed reading various books on the subject. Two that I can
          personally recommend are Clean Code by Robert Martin and The Pragmatic
          Programmer by Andrew Hunt &amp; David Thomas.
        </p>
      </li>
    </ul>
  </Layout>
)
