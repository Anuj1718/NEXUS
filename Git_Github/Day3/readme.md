<!-- Step to Learn Git and GitHub -->


1: Git: Git is a version control system (VCS) that helps developers keep track of changes to their code over time. It allows multiple people to collaborate on the same project, track the history of changes, and manage different versions of a project efficiently.




Install Git


<!-- 1: On Mac: -->




Install Homebrew(if not already installed)
Command:
First step: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


Second Step: eval "$(/opt/homebrew/bin/brew shellenv)"


Third Step: brew install git
Fourth step: git --version


<!-- On Windows -->


Download from website: https://git-scm.com/downloads






<!-- ****************************************** -->






<!-- Configure git -->


git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"




You can verify the configuration:
git config --list




<!-- How to see hidden folder -->
In Mac: CMD + SHIFT + .
In Windows:
In Windows 10: Click on the View tab at the top, then check the box for Hidden items in the "Show/Hide" section.
In Windows 11: Click the View dropdown (three dots) in the toolbar, then select Show > Hidden items.


<!-- **************************** -->


git status
<!-- What changes are staged , not staged, untracked-->


<!-- git diff -->
q for exit
<!-- What has been changed line by line in your report. -->
<!-- it will show which parts of the report have been edited but are not yet staged for commit. -->






<!--Add file to staging area  -->
git add .


<!--Commit file -->
git commit -m "message"


<!-- Remove file from staging area -->
git reset <file>
git restore --staged <file>


<!-- Get logs of commit -->
git log
got log --oneline
git show <hash>




<!-- Revert the changes -->
git reset --hard <hashCode>
git revert <hashcode>
<!-- git add . -->
<!-- git commit -m "next" -->

<!-- How to create a branch -->
git checkout -b <branch-name>


<!-- Delete a branch -->
git branch -d branch-name
git branch -D branch-name (unmerged also)

<!-- ESC :wq --> helpful(Escape the writing mode, save and quit)
<!-- i: insert mode -->


<!-- How to change the name of branch -->
git branch -m <branch_name>

<!-- Git stash -->
allows you to temporarily save your uncommitted changes (both staged and unstaged) in a "stash" and revert your working directory back to the last commit.

<!-- git stash -->
<!-- git stash list -->
<!-- git stash apply -->
<!-- git stash apply stash@{1} -->
<!-- git stash pop -->
<!-- git stash clear -->


<!-- Working with Github -->
<!-- git remote add origin https://github.com/mohitji-dons/Helloji.git
git branch -M main
git push -u origin main -->

<!-- git pull origin main -->
<!-- git pull --rebase origin main-->

<!-- git branch -r -->

<!-- git push origin --delete feature -->



<!-- day 3 -->

in master branch, say you have const age = 20; and in pay branch you have const age = 25;
When you try to merge pay branch into master branch using git merge pay while on master branch, Git will detect a conflict because the same line (const age) has been modified differently in both branches. Git will mark this as a merge conflict and will not complete the merge until the conflict is resolved.

but why didnt i get a conflict here?

Why you did NOT get a conflict:

A merge conflict happens only if both branches modify the same lines relative to their common base commit.

Case that produces NO conflict (your situation)
A (base):    const age = 20;
              |
master:       (no change)
pay:          const age = 25;


Commands

git checkout master
git merge pay


Result

Git sees:

master: unchanged from base

pay: changed 20 → 25

No ambiguity

Git applies pay’s change cleanly

✅ Fast, clean merge
❌ No conflict


When a conflict does happen:

Both branches must change the same line after the split.

A (base):    const age = 18;
              |
master:      const age = 20;
pay:         const age = 25;


Now Git cannot decide which is correct.

Result

CONFLICT (content): Merge conflict in file.js

Key rule (this is the mental model)

Different values ≠ conflict
Concurrent edits to the same line ≠ auto-merge

Conflict condition:

base → master changed
base → pay changed
same lines

Why many people get this wrong

Humans think:

“Values differ → conflict”

Git thinks:

“Who edited what since the base?”

Git always compares:

base → branch A
base → branch B


Not:

branch A ↔ branch B



Strategic takeaway:

Git is deterministic, not semantic.

Conflicts are about simultaneous edits, not correctness.

If one branch is untouched, Git will always auto-merge.


What “base” actually means (precise)

Base ≠ branch name.
The base is the common ancestor commit of the two branches being merged.

When you run:

git checkout master
git merge pay


Git computes:

base = merge-base(master, pay)


That base is a commit, not “master”.


When base == master

This happens only if master has not moved since the branch was created.

Timeline:

A ── master
 \
  pay


pay was created from master

master never changed afterward

Here:

base == master == A


So Git sees:

master: no change

pay: change

➡️ clean merge, no conflict

When base ≠ master (most real cases)
A ── B ── master
 \
  C ── pay


Here:

A = base (common ancestor)

B = master changed

C = pay changed

Now:

base ≠ master


Git compares:

A → B
A → C


If both touch the same lines → conflict.

Why Git must do this

If Git treated “master” as base:

It would overwrite history

It would lose changes silently

Merges would be incorrect after any parallel work

The 3-way merge exists specifically because branches diverge.

Your earlier example, corrected

You thought:

“master has 20, pay has 25 → conflict”

Reality:

If pay was created from master after age=20 existed:

base:    20
master:  20
pay:     25


No conflict. Git sees only one side changed.

How to see the base commit
git merge-base master pay


This command will permanently lock this concept in your head.

Strategic takeaway (important)

Base is historical, not positional

Conflicts require parallel edits

If one branch didn’t move, Git never guesses


<!-- rebasing vs merging -->
Rebasing and merging are both ways to integrate changes from one branch into another in Git, but they do so in different ways.
Merging:
Merging creates a new commit that combines the changes from both branches. The history of both branches is preserved, and a merge commit is created to indicate where the branches were combined.
Commands:
git checkout main
git merge feature-branch
Rebasing:
Rebasing, on the other hand, rewrites the commit history by moving the entire feature branch to begin on the tip of the main branch. This results in a linear history without merge commits.
Commands:
git checkout feature-branch
git rebase main

The main difference between the two is that merging preserves the complete history of both branches, while rebasing creates a linear history by applying the changes from one branch on top of another. Rebasing can make the commit history cleaner and easier to read, but it rewrites history, which can be problematic if the branch has already been shared with others.

git checkout payment
git rebase master 
<!-- git rebase master: rebases current branch onto master, git rebase master means “re-write the current branch so it looks like it was created from the latest master”.  --> 
git status
git add .
git rebase --continue 
dont commit here
can change commit message using
git commit --amend or press i in vim
i: insert mode
then press ESC
then type :wq in vim to save and quit
then 
git checkout master
git merge payment
as master to fir bhi wahi peeche tha so end mai checkout kar ke merge kiya to fast forward merge ho gaya, ab master aur payment dono same ek line aa gaye

reabasing means u reabase ur branch on top of another branch


git rebase master:
means: Take the commits that exist on the current branch but not on master, and replay them on top of master.
What it does not mean

❌ It does not change master

❌ It does not merge master into the current branch

❌ It does not move commits from master

Concrete example

You are on branch pay.

Before
A ── B ── master
 \
  C ── D ── pay

Command
git checkout pay
git rebase master

After
A ── B ── master ── C' ── D'   pay


C and D are replayed as C', D'

master is untouched

One-line mental model (use this)

Rebase = move my commits to the tip of their branch

Why the wording matters

People say “rebase to master” casually.
Correct Git language is rebase onto master.

This avoids the false idea that master is being changed.

<!-- git stash -->
allows you to temporarily save your uncommitted changes (both staged and unstaged) in a "stash" and revert your working directory back to the last commit.
<!-- git stash --> saves your current changes to a new stash and reverts your working directory to match the HEAD commit
<!-- git stash list --> it shows all the stashed changes
<!-- git stash apply --> applies the most recent stash without removing it from the stash list
<!-- git stash apply stash@{1} --> applies a specific stash from the list without removing it
<!-- git stash pop --> applies the most recent stash and removes it from the stash list
<!-- git stash clear --> removes all stashes from the stash list


Github:<!-- Working with Github -->

create a new repository on command line:
echo "# Helloji" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repository.git
git push -u origin main

push an existing repository from the command line:
git remote add origin https://github.com/yourusername/your-repository.git : It adds a new remote repository named "origin" with the specified URL.
git branch -M main : It renames the current branch to "main" (if it's not already named that). Earlier, the default branch was often called "master", but many repositories now use "main" as the default branch name cuz master was considered problematic and insensitive.
git push -u origin main : It pushes the current branch to the remote repository and sets the upstream branch for future pushes and pulls. With the -u flag, Git remembers the association between the local "main" branch and the remote "main" branch on "origin", so you can use git push and git pull without specifying the remote and branch names in the future.
later, just use:
git push origin main or git push

after upstream is set, you can use the following commands to push changes to the remote repository:
| Command                | Result                                         |
| ---------------------- | ---------------------------------------------- |
| `git push`             | Push current branch                            |
| `git push origin main` | Push `main` explicitly                         |
| `git push origin`      | Push **all** matching branches (usually avoid) |



in companies, usually we use SSH key to connect to github instead of HTTPS link.

in companies, we fork a repository, make changes in our forked repo, and then create a pull request to suggest those changes to the original repository. This allows for code review and collaboration before merging changes into the main codebase.
or
clone the repository, create a new branch, make changes, push the branch to the remote repository, and then create a pull request from that branch to the main branch of the original repository.

pullrequest: A pull request (PR) is a way to propose changes to a codebase in a collaborative environment, typically on platforms like GitHub, GitLab, or Bitbucket. When you create a pull request, you are requesting that your changes be reviewed and potentially merged into another branch, usually the main branch of the repository.

raise pr: After pushing your changes to a branch in your forked repository, you can go to the original repository on GitHub. There, you'll see an option to create a pull request from your branch. Click on it, provide a title and description for your changes, and submit the pull request for review.


git pull origin main: This command fetches the latest changes from the remote repository named "origin" and merges them into your current local branch (which is "main" in this case). It ensures that your local branch is up to date with the remote branch before you push any new changes.

git branch -r: This command lists all the remote branches available in the remote repository. It shows you the branches that exist on the remote server, allowing you to see what branches are available for collaboration or tracking.

git push origin --delete feature: This command deletes the remote branch named "feature" from the remote repository named "origin". It is used when you want to remove a branch that is no longer needed or has been merged into another branch.

git pull --rebase origin main: This command fetches the latest changes from the remote repository named "origin" and rebases your current local branch (which is "main" in this case) on top of those changes. Instead of merging the changes, it rewrites your local commits to appear as if they were made after the latest commits from the remote branch, resulting in a linear commit history.


meme: never push to code on friday evening
explanation: If something goes wrong, you might have to spend your entire weekend fixing it, and he has to fix merge conflicts alone.

does github use github too?
Yes, GitHub uses Git for version control and also hosts its own code repositories on its platform. GitHub is built around Git, providing a web-based interface for managing Git repositories, collaborating on code, and utilizing various features like pull requests, issues, and project management tools.
