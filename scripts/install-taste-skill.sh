#!/usr/bin/env bash
# Installs Leonxlnx/taste-skill into .agents/skills. That tree stays gitignored.
# This script is the committed install step. CI runs it.
# --agent cursor writes only .agents/skills. Installing every agent also
# creates agent/skills, skills/, and data/skills, and ESLint fails on those.
set -euo pipefail
cd "$(dirname "$0")/.."
npx --yes skills add Leonxlnx/taste-skill --yes --agent cursor
# The published package ships design-taste-frontend. It no longer
# includes redesign-existing-projects, so requiring that file failed
# CI after a successful install.
test -f ".agents/skills/design-taste-frontend/SKILL.md"
echo "taste-skill installed under .agents/skills"
