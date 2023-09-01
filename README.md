# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Mount LifeCycle

constructor()
getDeriverStateFromProps()
render()
componentDidMount()

# update LifeCycle

getDerviedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforUpdate()
componentDidUpdate()

# unmount LifeCycle

componentWillUnmount()


# Git commands

1.git init - create a new repo in local
2.git add . - copy all files in current directory
3.git commit -am "message" - paste all files to local repo with message update

# Git Config
1.git config --global user.email "<email>" or git config --global user.name "<name>"
2.GIT config --local user.email "<email>" or git config --local user.name "<name>"

# Git Remote

1.git branch -M <branch-name>
2.git remote add <remote-name> <remote-url>
3.git push <remote-name> 

# Git Branches

1.git clone <git-url>
2.git branch -M <branch-name>
git push <remote-name> <branch-name>