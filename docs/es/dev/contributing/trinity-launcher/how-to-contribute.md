# How to Contribute

## Contribution Workflow

### 1. Prepare Your Environment

```bash
# Clone the repo
git clone https://github.com/Trinity-LA/Trinity-Launcher.git
cd Trinity_Launcher

# Create a branch
git checkout -b feature/your-change
# or
git checkout -b fix/your-bug
```

### 2. Make Changes

- Follow the [Code Style](./code-style.md)
- Write [Clear Commits](./commit-strategy.md)
- If using AI, respect the rules defined below.

### 3. Build and Test Locally

```bash
# Compile trinchete
qmake -project -o trinchete.pro
echo "QT += widgets" >> trinchete.pro
qmake trinchete.pro
make

# Compile trinito
qmake -project -o trinito.pro
echo "QT += widgets" >> trinito.pro
qmake trinito.pro
make

# Run
./trinchete
./trinito
```

## AI Usage Policy

> [!WARNING]
> **Important Rule:** Prevent AI from modifying code unnecessarily.

**Allowed:**
- ✅ Using AI to understand code
- ✅ Using AI to write documentation
- ✅ Using AI to design tests
- ✅ Using AI to propose solutions in issues

**NOT Allowed:**
- ❌ AI optimizing code on its own
- ❌ AI refactoring without prior documentation
- ❌ AI making changes to "improve" code

**Reason:** Undocumented changes can break things we haven't documented yet. Stability is more important than optimization right now.
