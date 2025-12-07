---
description: "Task list for Deploy Physical AI & Humanoid Robotics Textbook to GitHub Pages"
---

# Tasks: Deploy Physical AI & Humanoid Robotics Textbook to GitHub Pages

**Input**: Design documents from `/specs/004-physical-ai-deployment/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Docusaurus project**: `docs/`, `src/`, `static/` at repository root
- **Configuration**: `docusaurus.config.ts`, `sidebars.ts`, `package.json`
- **GitHub Actions**: `.github/workflows/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare deployment environment and tools

- [X] T001 Set up local development environment for deployment validation
- [X] T002 [P] Install Docusaurus CLI tools for build validation
- [X] T003 Verify repository is properly configured for GitHub integration

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core deployment infrastructure that MUST be complete before user stories can begin

**⚠️ CRITICAL**: No deployment work can begin until this phase is complete

- [X] T004 Obtain GitHub username and repository name from user for configuration
- [X] T005 [P] Create .github/workflows directory structure
- [X] T006 Document current docusaurus.config.ts values for backup

**Checkpoint**: Foundation ready - deployment work can now begin in parallel

---

## Phase 3: User Story 1 - Repository Configuration (Priority: P1) 🎯 MVP

**Goal**: Configure the Docusaurus project for GitHub Pages deployment so that the textbook can be published and accessed by students and educators

**Independent Test**: Verify the docusaurus.config.ts file has correct GitHub Pages configuration values.

### Implementation for User Story 1

- [X] T007 [US1] Update url field in docusaurus.config.ts to 'https://[username].github.io'
- [X] T008 [US1] Update baseUrl field in docusaurus.config.ts to '/[repo-name]/'
- [X] T009 [US1] Update organizationName field in docusaurus.config.ts to '[username]'
- [X] T010 [US1] Update projectName field in docusaurus.config.ts to '[repo-name]'
- [X] T011 [US1] Verify deploymentBranch is set to 'gh-pages' in deployment configuration
- [X] T012 [US1] Test that build command reflects correct GitHub Pages URL structure
- [X] T013 [US1] Validate all GitHub Pages configuration values are properly set

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Local Build Validation (Priority: P2)

**Goal**: Validate the production build locally before deployment so that there are no build errors or broken links

**Independent Test**: Run the Docusaurus production build command and verify success.

### Implementation for User Story 2

- [X] T014 [US2] Run 'npm run build' command to validate production build
- [X] T015 [US2] Check build output for any errors or warnings
- [X] T016 [US2] Verify build completes successfully without errors
- [X] T017 [US2] Check built site for broken links using local server
- [X] T018 [US2] Verify all content renders correctly in built version
- [X] T019 [US2] Document any issues found during build validation
- [X] T020 [US2] Fix any issues identified during build validation

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - GitHub Actions Setup (Priority: P3)

**Goal**: Set up automated deployment via GitHub Actions so that the textbook is automatically published when changes are pushed to the main branch

**Independent Test**: Verify the GitHub Actions workflow file exists and functions correctly.

### Implementation for User Story 3

- [X] T021 [US3] Create GitHub Actions workflow file at .github/workflows/deploy.yml
- [X] T022 [US3] Configure workflow to trigger on pushes to main branch
- [X] T023 [US3] [P] Add Node.js setup step using actions/setup-node@v4
- [X] T024 [US3] [P] Add dependency installation step using 'npm ci'
- [X] T025 [US3] Add Docusaurus build command step 'npm run build'
- [X] T026 [US3] Configure deployment to gh-pages branch using peaceiris/actions-gh-pages
- [X] T027 [US3] [P] Add proper authentication with GITHUB_TOKEN
- [X] T028 [US3] [P] Set publish directory to ./build
- [X] T029 [US3] [P] Set publish branch to gh-pages
- [X] T030 [US3] Verify workflow includes all required steps and configuration

**Checkpoint**: At this point, User Stories 1, 2 AND 3 should all work independently

---

## Phase 6: User Story 4 - Execution & Live Check (Priority: P4)

**Goal**: Make the published site accessible so users can learn from the Physical AI & Humanoid Robotics content

**Independent Test**: Access the published site and verify it's working correctly.

### Implementation for User Story 4

- [X] T031 [US4] Commit all changes to the repository
- [X] T032 [US4] Push changes to GitHub to trigger initial deployment
- [X] T033 [US4] Monitor GitHub Actions workflow status in repository
- [X] T034 [US4] Verify deployment workflow runs successfully
- [X] T035 [US4] Access published site at https://[username].github.io/[repo-name]/
- [X] T036 [US4] Test all navigation and content on published site
- [X] T037 [US4] Verify all pages load correctly on GitHub Pages
- [X] T038 [US4] Document the final Public GitHub Repo Link
- [X] T039 [US4] Document the final Published Book Link
- [X] T040 [US4] Verify all functionality works as expected on deployed site

**Checkpoint**: At this point, all user stories should be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T041 [P] Update README.md with deployment instructions
- [X] T042 [P] Add deployment status badge to README.md
- [X] T043 Update documentation with published site URL
- [X] T044 Verify all links work correctly in deployed version
- [X] T045 Optimize site performance for GitHub Pages hosting
- [X] T046 Add error handling for deployment failures
- [X] T047 Update quickstart.md with deployment-specific instructions
- [X] T048 Verify site adheres to Physical AI Constitution principles in deployed form

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after User Story 1 (P1) - Depends on configuration being complete
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 4 (P4)**: Can start after User Stories 1, 2, and 3 are complete - Depends on all previous work

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority
- Configuration before validation

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, User Stories 1 and 3 can start in parallel (as they don't depend on each other)
- Different validation and setup tasks can proceed in parallel after foundational setup

---

## Parallel Example: User Story 3

```bash
# Launch all parallel tasks for User Story 3 together:
Task: "Add Node.js setup step using actions/setup-node@v4"
Task: "Add dependency installation step using 'npm ci'"
Task: "Add proper authentication with GITHUB_TOKEN"
Task: "Set publish directory to ./build"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test GitHub Pages configuration independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (Configured!)
3. Add User Story 2 → Test independently → Deploy/Demo (Validated!)
4. Add User Story 3 → Test independently → Deploy/Demo (Automated!)
5. Add User Story 4 → Test independently → Deploy/Demo (Published!)
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Repository Configuration)
   - Developer B: User Story 2 (Local Build Validation)
   - Developer C: User Story 3 (GitHub Actions Setup)
   - Developer D: User Story 4 (Execution & Live Check) - waits for others
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [US1], [US2], [US3], [US4] labels map task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Each module should follow the Physical AI & Humanoid Robotics Constitution principles