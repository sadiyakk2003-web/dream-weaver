

# Dream Weaver 

## Basic Details

### Team Name:INDIVIDUAL PROJECT

### Team Members
- Member 1: SHADIYA -MAMOC

### Hosted Project Link
https://dream-weaver-green.vercel.app/

### Project Description
Dream Weaver is an AI-powered storytelling engine designed to bridge the gap between fragmented dream memories and complete, atmospheric narratives. Users can "scribble" the hazy details of their dreams, choose a "vibe" or mode, and let our magical weaver (powered by Google Gemini) knit them into a beautiful, personalized story.

### The Problem statement
In our daily lives, we often wake up with vivid yet fleeting fragments of dreams. These "scraps" of memory—a face, a feeling, or a strange garden—often disappear before we can process them or share them with others, leaving us wishing we could remember the full story behind the sleep.

### The Solution
Dream Weaver provides a creative space to document these fragments before they fade. By selecting from different emotional modes (Joy, Adventure, Nature, or Tragedy), the AI interprets the user's subconscious inputs and "weaves" them into a cohesive narrative, allowing users to memorialize and share their imaginative inner worlds.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: HTML, CSS, JavaScript
- Frameworks used: Next.js 15 (App Router)
- Libraries used: @google/generative-ai, Framer Motion, Lucide React
- Tools used: Git, GitHub, Antigravity AI Assistant, VS Code, Google Gemini API

---

## Features

List the key features of your project:
- **Magical Scribble Pad**: A dedicated space to input dream fragments with helpful prompts for time, environment, and sensory details.
- **Magic Control Panel**: Choose from four distinct emotional modes (Feel Good, Adventure, Natural, or Tragedy) to influence the AI's storytelling style and the app's visual aesthetic.
- **AI Story Completion**: Integration with Google Gemini (gemini-1.5-flash) to transform raw bullet points into professionally written, evocative paragraphs.
- **Ethereal Animated UI**: A dark, star-filled aesthetic featuring a "Cloud Baby" loading animation that visually "knits" your story while the AI processes.
- **Mode-Responsive Design**: The entire application's theme—including gradients, glows, and page layouts—dynamically shifts to match the selected dream "vibe."

---

## Implementation

### For Software:

#### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/dream-weaver.git

# Navigate to project directory
cd dream-weaver

# Install dependencies
npm install
```

#### Run
```bash
# Set up environment variables
# Create a .env.local file and add:
# GEMINI_API_KEY=your_key_here

# Run the development server
npm run dev
```

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](docs/screenshots/landing.png)
*Landing Page: The entrance to the Dream Weaver, featuring a stylish gradient title and visual roadmap.*

![Screenshot2](docs/screenshots/customize.png)
*Magic Control Panel: Where users select their dream's emotional resonance and format.*

![Screenshot3](docs/screenshots/result.png)
*The Result: A completed dream "woven" into a paper-roll scroll with atmospheric styling.*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*The system uses a Next.js frontend that persists state in localStorage and communicates with a Google Gemini backend service via a secure API route.*

**Application Workflow:**

![Workflow](docs/workflow.png)
*User Flow: Landing -> Scribble Fragments -> Customize Vibe -> AI Processing (Loading) -> Experience Woven Dream.*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `/api`

##### Endpoints

**POST /api/generate**
- **Description:** Receives dream fragments and configuration to generate a story via Gemini AI.
- **Request Body:**
```json
{
  "fragments": "string (the user's dream notes)",
  "mode": "string (feel-good, adventure, natural, tragedy)",
  "format": "string (text, visual)"
}
```
- **Response:**
```json
{
  "title": "Poetic Dream Title",
  "story": "The generated narrative paragraph...",
  "atmosphere": "Mood description"
}
```

---

### Demo Output

**Example 1: Basic Processing**

**Input:**
```
I was in a garden. Blue flowers. A stranger gave me a glass sphere. Smelled like honey.
```

**Output:**
```json
{
  "title": "The Azure Bloom of Memory",
  "story": "You stood at the edge of a garden you had never seen before... inside the sphere, a miniature storm swirled...",
  "atmosphere": "Magical"
}
```

---

## Project Demo

### Video
[Link to Demo Video]

*The video demonstrates the end-to-end user journey: entering fragments, experiencing the magical loading state, and viewing the mode-aware results.*

---

## AI Tools Used (Optional - For Transparency Bonus)

**Tool Used:** [Antigravity AI Assistant]
**Purpose:** Architecture design, component implementation, and CSS styling.

**Tool Used:** [Google Gemini]
**Purpose:** Core storytelling engine and content generation.

**Human Contributions:**
- Creative concept and user experience design.
- Custom CSS-based "Cloud Baby" animations.
- Prompts for the Dream Weaver's "personality."
- UI/UX layout and accessibility testing.

---

## Team Contributions

- [shadiya]: [Project lead, Frontend architecture, Gemini API integration, Custom CSS animations, and UI/UX design.]

## License

This project is licensed under the MIT License.

---

Made with ❤️ at TinkerHub
