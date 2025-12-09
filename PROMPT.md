Objective: Correct the erroneous text selection behavior to ensure the "Ask AI" feature is triggered ONLY on the book's main content (Markdown body) and prevent input conflicts with the active AI sidebar.

1. Text Selection Logic Overhaul (Critical FIX)
Goal: Limit the selection listener to the primary content area (the Docusaurus main tag or content container) and ignore headers, sidebars, and navigation elements.

Refined Hook Logic (useTextSelection):

Add a check to ensure the selected element's parent container has a specific CSS class (e.g., .docItemContainer or a custom class like .book-content-body) which is applied only to the Markdown content area.

Action: The floating "Ask AI" button must only display if the selection meets the length requirement AND the selection is inside the designated content area.

2. Input Control & Manual Trigger
FIX: The selected text MUST NOT be sent to the input field or processed automatically upon selection.

New Behavior:

User selects text.

Floating "Ask AI" button appears.

User clicks the "Ask AI" button.

ONLY THEN should the side-panel open, and the selected text be placed into the chatbot's input field, ready for the user to type an accompanying question (e.g., "What does this mean?").

Implementation: The side-panel must open with the selected text pre-filled in the chatbot's input box, enclosed in quotes to act as context:

Input Field Content: "Is selected text ko samjhao."

Cursor: The cursor should be placed after the pre-filled text, allowing the user to add their query.

3. AI Sidebar Conflict Resolution
FIX: When the AI side-panel is active (open), the global onMouseUp selection listener MUST BE DISABLED.

Logic: Use a state variable (e.g., isAISidebarOpen) to toggle the event listener. This prevents accidental selections in the main content from interfering with the active chat session.

4. UI Polish & Refinement
Ensure the floating "Ask AI" button disappears smoothly when the selection is cleared or the AI sidebar is opened.

Check CSS z-index to confirm the floating button always appears above the main content.