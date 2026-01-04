<!-- git graph extension  -->
<!-- app.eraser.io -->

git log
<!-- shows the commit history, it gives the commit ID, author, date, and commit message -->

git log --oneline 
<!-- gives a concise summary of each commit, it gives the commit ID(first 8 characters) and the commit message -->

git show <id>
<!-- shows details of a specific commit, use the id from git log or git log --oneline -->


<!-- the entire commit history is what is master branch and the latest commit is called HEAD  -->

when you make a new commit, the HEAD moves to point to the new commit and the master branch also moves to point to the new commit 

head always points to the latest commit in the current branch


<!-- Revert the changes -->
git reset --hard <hashCode> 
put the hashcode of the commit to which u want to go back to and u get that from git log or git log --oneline
<!-- this command will delete all the commits after that commit and move the HEAD and master branch to that commit -->
<!-- use this command when u want to completely delete the commits after that commit -->
<!-- i.e u bring the head to the previous commit and delete all the changes made after that commit  -->

what if i wanna undo a specific commit like 3rd commit but keep the commits after that commit intact (like 4th, 5th, 6th etc)
git revert <hashcode>
this may cause merge conflicts if the changes made in that commit conflict with the changes made in the later commits
<!-- this command will create a new commit that undoes the changes made in the specified commit -->

use like this
git revert a1b2c3d4
git add .
git commit -m "Reverted changes from commit a1b2c3d4"

say 3rd commit mai updatebalance function ko change kiya tha, 5th mai login function ko change kiya tha, 6th mai signup function ko change kiya tha, to agar reset hard karenge to 2nd commit pe chala jayega aur 3rd, 4th, 5th, 6th sab delete ho jayenge 
isliye agar sirf 3rd commit ko undo karna hai to revert karenge to 4th, 5th, 6th commits safe rahenge aur ek new commit banega jo 3rd commit ke changes ko undo karega.
isliye fir uske baad firse add aur commit karna padega.
aur agar 3rd commit mai jo changes kiye the wo 4th, 5th, 6th commits mai change nahi hue the to revert karne mai koi dikkat nahi aayegi.
and if 3rd commit ke changes 4th, 5th, 6th commits mai change hue the to merge conflicts aayenge jise manually resolve karna padega.

each commit comes with a unique hashcode which is generated using SHA-1 algorithm.
each commit comes from the previous commit and has a unique hashcode.
u cant jus remove a specific commit from the middle of the commit history without affecting the later commits unless u use revert.