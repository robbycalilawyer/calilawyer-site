#!/usr/bin/env bash
# Installs Leonxlnx/taste-skill into .agents/skills. That tree stays gitignored.
# This script is the committed install step. CI runs it.
# --agent cursor writes only .agents/skills. Installing every agent also
# creates agent/skills, skills/, and data/skills, and ESLint fails on those.
set -euo pipefail
cd "$(dirname "$0")/.."
npx --yes skills add Leonxlnx/taste-skill --yes --agent cursor
for skill in redesign-existing-projects design-taste-frontend; do
  test -f ".agents/skills/${skill}/SKILL.md"
done
echo "taste-skill installed under .agents/skills"
