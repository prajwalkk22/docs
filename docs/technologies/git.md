---
id: git
title:git
---
# 📘 Git & GitHub Documentation

---

## 🧩 Git Basics

- **Git** is a software used for version control.
- **GitHub** is a service to host Git repositories online.
- It is a **version control system (VCS)**.
- It allows you to go back to required checkpoints in your code history.

### 🔧 Installation & Setup

#### Check Git version:
```bash
git --version
```

#### Configure Git:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

#### Initialize a Git Repository:
```bash
git init
```

---

## 🔄 Git Flow (Lifecycle)

1. Initialize repository:
```bash
git init
```

2. Working directory → Staging area:
```bash
git add <filename>
```

3. Staging area → Repository:
```bash
git commit -m "Your message"
```

4. Repository → GitHub:
```bash
git push
```

---

## 🗂️ Status & Logs

#### Check status:
```bash
git status
```

#### Add multiple files:
```bash
git add file1 file2
```

#### Commit with message:
```bash
git commit -m "your commit message"
```

#### View commit logs:
```bash
git log
```

#### View log in one line:
```bash
git log --oneline
```

---

## ⚙️ Configuration

#### Set VS Code as default editor:
```bash
git config --global core.editor "code --wait"
```

---

## 🔒 .gitignore

#### Create and edit a `.gitignore` file to exclude files from Git tracking:
```bash
touch .gitignore
```

---

## 🌿 Branches

#### View branches:
```bash
git branch
```

#### Create new branch:
```bash
git branch feat1
```

#### Switch to a branch:
```bash
git switch feat1
```

#### Create and switch to a new branch:
```bash
git switch -c feat2
```

#### Checkout a branch:
```bash
git checkout feat3
```

---

## 🧠 HEAD in Git

- `HEAD` points to the **current branch tip** (i.e., the last commit on the active branch).

---

## 📝 Notes on Code

- Use `git init` in your project root to track your project.
- Stage your changes using `git add` before committing.
- Use meaningful commit messages.
- Use branching for new features or fixes.
- Use `.gitignore` to exclude unnecessary files (like `target/`, `.idea/`, etc.)
- `git log` is useful to view the commit history.
- Use `git status` frequently to track your working state.