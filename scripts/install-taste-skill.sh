#!/usr/bin/env bash
# Installs Leonxlnx/taste-skill into .agents/. That tree stays gitignored.
# This script is the committed install step. CI runs it.
set -euo pipefail
cd "$(dirname "$0")/.."
npx --yes skills add Leonxlnx/taste-skill --yes
for skill in redesign-existing-projects design-taste-frontend; do
  test -f ".agents/skills/${skill}/SKILL.md"
done
echo "taste-skill installed under .agents/skills"
