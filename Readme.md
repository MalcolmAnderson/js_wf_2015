Readme.md

Future todo watch Lab1: "The great grunt shootout"
http://www.letscodejavascript.com/v3/episodes/lab/1

Check jake into version control


get rid of tempoary files
git clean -fdx





Before building for the first time:

1. Install Ndoe
2. Install Git
3. Clone repository by typing 'git blah blah blah'

Build like this
./jake.sh (Unix/Mac)



--- adding a package
npm install <package_name> --ignore-scripts  --save-dev 
git add .
git commit -am <TK appropiarte message>
npm rebuild
git status (expect no changes from commit)
// if there are changes, the changes need to be added to .gitignore 


--- build options
./jake.sh
or
./jake.sh -T




Git credential.helper tools  (http://git-scm.com/docs/git-credential-store)
$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>

[several days later]
$ git push http://example.com/repo.git
[your credentials are used automatically]



Current location 43:18
Current location 51:34
Current location 60:11
http://www.letscodejavascript.com/v3/episodes/lessons_learned/16
