---
title: Equicord
description: things i did for equicord or just discord modding in general
date: "2025.02.06"
---

## css

After being around cassie for only a couple of days I had already seen her messing with css on several occasions.

I never really interacted much with css myself other than installing stylus themes or the few times I wrote something for an intro
web dev course that I followed for a couple hours at most or something.

At some point I saw her removing a dumb discord thing with quickss, which I had no idea existed up until then.

I started out with just coloring my own name but after not that long I had a fairly long quickcss file.
Eventually when I found the scrolling to be too tedious, I decided to move it to a repo with mildly categorized files.

## equicock plugins
I've been using vencord since late 2023 when a friend of mine switched to it and they told me it wasn't as slow as betterdiscord.

I find it enjoyable to fiddle with things, especially if it improves my day to day life.

### fullVcPfp
Making a vencord plugin has been in the back of my head for a while but I never really had a good idea, until the idea for fullVcPfp popped into my head.

At first I gave up when I couldn't make a proper patch myself (i suck at regex and especially trying to understand minified react), but I soon discovered usrbg had a suitable one.

The rest of the development process was fairly straightforward and enjoyable. When it was done I realized there was no way it would get added to vencord because the administration sucks and they have rejected plenty of actually good plugins.

However, I had recently switched to equicord, and when I looked at some of their plugins, it was quite obvious they had next to no standards. bingo!

I joined their server and submitted my pull request. Within like an hour it was merged to dev.
It probably would've been shorter if the person reviewing my code actually knew what they were doing.

My plugin did not work on the web version of discord but they found a fix that didn't really make any sense.

Plugin got merged to main while I was sleeping.

### toggleVideoBind
On the same day I looked through the vencord plugin suggestions repo and came across
one asking for a bind to toggle webcam. This was something I had already implemented with the legcord shortcut feature.

Development process was fairly short but I'm still pretty clueless with a lot of the stuff I'm doing. At least there was no regex this time.