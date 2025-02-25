---
layout: ../../layouts/BlogEntry.astro
title: Auto_PGP
description: simple qol project for abacus market
date: "2025.02.07"
---

The abacus market login process is just a whole lot of human verification and security checks.

I noticed that in the settings page, there was a section for logging in by decrypting a PGP message. After a bit of research I decided it actually would be slower, as I would have to:
- Copy the message
- Open an online PGP message decryptor and paste the message
- Find where I store my private key and copy it
- Paste it into the message decryptor
- Find the verification string and copy it
- Paste it into abacus

While hoping the timer did not run out (it wasn't very forgiving).

One night I had the thought of switching to PGP verification and automating the process as it seemed very feasible.
My first thought was to do this in Python as it's commonly used for automation scripts.

Cassie insisted that we use TypeScript instead, because she wanted to try the Bun native compile feature.

At first we tried using the shell execute feature of Bun, but windows requires PowerShell for clipboard management.

After finding a suitable package,
everything was working perfectly and I wrote a GitHub workflow for uploading pre-compiled executables.

However, during testing I only ever did `bun run inde\t\n` and didn't actually compile it.

I only really disovered this when I later tried using one of the pre-compiled executables when logging in on windows,
which is when I saw that the program returns a fairly cryptic error about your drive not being found.

After a bit of testing i found out that the clipboard package that I found did not work with the Bun compilation.

At this point I decided to try rewriting the program in Rust, which ended up with me being confused as to why people like it so much.

I found a good clipboard crate but every PGP crate I looked at had like a bajillion types,
and no way to just import a private key from a file.
(I think it needed you to specify some things called MPIs for rsa private keys?)

I looked at a whole lot of other languages, which were one or more of the following:
- Too complicated to use
- Didn't have good enough tooling
- Couldn't compile to native code that didn't need dependencies on windows and Linux

After googling a list of widely used programming languages, I remembered Go exists.
The packages seem promising and the package manager is actually useable.
(oomf also told me it's programming for stupid people which sounds very good)

## go port
Development was basically just writing the typescript code but replacing `.expect()`
with `var, err :=` and `if (err != nil) {log.Fatal()}`.

The tooling was very good, but the unused import and variable warnings became annoying during debugging.

I didn't like Go that much since it lacks a lot of the things I'm used to in js/ts,
mostly because it often forces you to have intermediary variables instead of using methods.

It will definitely be my go-to (get it?) language if I ever need to write something that has to compile to native code again though.
