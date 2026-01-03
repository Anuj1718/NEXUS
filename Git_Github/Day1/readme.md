<!-- Step to Learn Git and GitHub -->


1: Git: Git is a version control system (VCS) that helps developers keep track of changes to their code over time. It allows multiple people to collaborate on the same project, track the history of changes, and manage different versions of a project efficiently.


<!-- git-scm.com -->
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Git is lightning fast and has a huge ecosystem of GUIs, hosting services, and command-line tools.


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

<!-- check version  -->
git --version

<!-- update git -->
git update (deprecated but works)
git update-git-for-windows

<!-- Configure git -->
<!-- as code likhoge uske aage naam, email attached rahega -->


git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config user.name
git config user.email




You can verify the configuration:
git config --list


cd <folder name>
cd init 
<!-- wherever u initialise git, .git folder gets created in it which is hidden folder.  -->

U:untracked
git add first.js
A:added
git add .  
<!-- for tracking /staging all files  -->

git status
<!-- to check status of files -->
<!-- shows which branch you are on and which files are committed, uncommitted, staged, unstaged, modified etc.  -->

git commit -m "first commit"
<!-- commit message should be in double quotes -->
<!-- only files which are staged will be committed.  -->
<!-- now its history will be maintained forever -->
<!-- circle icon means its committed. -->

git diff 
<!-- to see difference between staged and unstaged files -->


gitlens extension in VS code
<!-- to see history of file changes -->

<!-- to exit from git diff view -->
press q

when u type git status , you will see different codes before file names.
if it says changes not staged for commit (red color), it means file is modified but not yet staged. Then type git add <file name> to stage it or git add . to stage all files.
if it says changes to be committed(green color), it means file is staged and ready to be committed. Then type git commit -m "message" to commit it. or git reset <file name> to unstage it.

Git Status Codes:
U : Untracked / Unstaged 
A : Added / Staged
M : Modified
D : Deleted
R : Renamed
C : Copied
S : Staged but unmerged
! : Ignored
? : Untracked   


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
<!-- use this command if u have staged a file by mistake and want to unstage it. or when u dont wanna commit that file now. -->


<!-- Get logs of commit -->
git log
got log --oneline
git show <hash>




<!-- Revert the changes -->
git reset --hard <hashCode>
git revert <hashcode>











