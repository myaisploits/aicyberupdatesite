export const posts = [
  {
    slug: 'agentic-systems-threat-model',
    title: 'Threat Modeling Agentic Systems Before They Reach Production',
    excerpt:
      'A field guide for mapping autonomy, tool access, model drift, and auditability before your first agent goes live.',
    author: 'Maya Hart',
    date: '2026-03-19',
    readingTime: '8 min read',
    category: 'Both',
    keywords: ['agentic systems', 'threat modeling', 'ai security'],
    content: `## Why agentic systems change the modeling surface

Teams often inherit classical application security patterns and assume they still apply cleanly to agents. That assumption breaks quickly. Agents can choose tools, sequence actions, and create state that is difficult to predict upfront.

### Start with capability boundaries

List every action the system can take on behalf of a user. For each capability, document:

- the triggering context
- the model or service involved
- whether an approval gate exists
- whether the action is reversible

This turns a vague "AI assistant" into a concrete inventory you can defend.

### Treat prompts as control surfaces

Prompts are not just product copy. They are executable control planes that define decision boundaries. That means prompt changes require the same review discipline you would apply to authorization logic.

\`\`\`ts
type AgentAction = {
  name: string
  requiresHumanApproval: boolean
  auditLabel: string
}

const dangerousActions = actions.filter(
  (action) => !action.requiresHumanApproval && action.auditLabel === 'high-risk',
)
\`\`\`

### Verify the audit trail

When an agent calls tools, the answer is not enough. You need an event trail that explains what was requested, what the model attempted, what guardrails changed the plan, and what eventually executed.

## A practical review sequence

1. Inventory tools and scopes.
2. Mark destructive or externally visible actions.
3. Add human approval to the smallest meaningful step.
4. Record structured logs for prompts, tool calls, and outputs.
5. Red-team for prompt injection and indirect prompt injection.

### Long-term ownership

The final trap is assuming model behavior is stable. Re-run the threat model when the model, prompt stack, or tool inventory changes.`,
  },
  {
    slug: 'secure-rag-pipelines',
    title: 'How to Secure a Retrieval-Augmented Pipeline Without Slowing Teams Down',
    excerpt:
      'Practical controls for document ingestion, embedding storage, retrieval boundaries, and response sanitization.',
    author: 'Jordan Lee',
    date: '2026-03-15',
    readingTime: '7 min read',
    category: 'Cybersecurity',
    keywords: ['rag', 'retrieval', 'secure architecture'],
    content: `## The common RAG mistake

Many teams harden the user interface and forget the ingestion layer. In practice, poisoned documents, stale access control rules, and unbounded retrieval are where most risk lives.

### Build security into the document lifecycle

Apply the same classification labels to source documents, embeddings, and retrieved context. If the labels diverge, your policy engine will drift.

### Limit retrieval by identity and purpose

Do not retrieve "everything the user can see." Retrieve the minimum set of passages necessary for the specific task.

## Defense-in-depth checklist

- sanitize inbound files before parsing
- version access policies with the content index
- scan retrieved snippets for secrets and unsupported content
- cap token budgets to reduce context leakage

### Response safety

Final answers should cite sources and suppress untrusted instructions from retrieved material. If a retrieved snippet tries to steer the model, it should be treated as hostile input.`,
  },
  {
    slug: 'governance-stack-for-ai-teams',
    title: 'The Governance Stack High-Performing AI Teams Actually Use',
    excerpt:
      'Governance works best when it is operational, lightweight, and embedded in delivery instead of bolted on at the end.',
    author: 'Elena Brooks',
    date: '2026-03-12',
    readingTime: '6 min read',
    category: 'AI',
    keywords: ['governance', 'ai ops', 'policy'],
    content: `## Governance that ships

The strongest AI governance programs avoid abstract committees without execution power. They place practical review points where teams already work: planning, model selection, deployment, and incident response.

### A usable governance stack

Create lightweight standards for:

- approved model families
- data handling tiers
- evaluation thresholds
- incident escalation

### What good looks like

If an engineer can explain the allowed models, the data restrictions, and the rollback path in under two minutes, the governance stack is probably healthy.`,
  },
  {
    slug: 'red-team-prompts-and-pipelines',
    title: 'Red Teaming Prompts and Pipelines for Real-World Abuse Cases',
    excerpt:
      'Move beyond jailbreak demos and design adversarial exercises that reflect your real integrations, users, and business risk.',
    author: 'Maya Hart',
    date: '2026-03-08',
    readingTime: '9 min read',
    category: 'Both',
    keywords: ['red teaming', 'prompt injection', 'evaluation'],
    content: `## Shift from novelty to operations

A useful red-team program starts with business-critical abuse cases, not internet-famous prompt attacks. Map what failure would look like for your actual workflows.

### Build scenario packs

Each pack should contain:

- a target workflow
- expected safe behavior
- attacker inputs
- escalation criteria

### Score more than model output

The visible answer matters, but so do tool calls, retries, and fallback behavior. Many risky systems fail safely in the final message while quietly misusing tools underneath.`,
  },
  {
    slug: 'ai-newsletters-security-leaders-read',
    title: 'Five AI Briefings Security Leaders Should Read Before Monday',
    excerpt:
      'A curated reading stack for security teams that need sharp AI context without committing to doomscrolling.',
    author: 'Jordan Lee',
    date: '2026-03-04',
    readingTime: '5 min read',
    category: 'AI',
    keywords: ['briefings', 'security leadership', 'curation'],
    content: `## Building signal

The best newsletters for security leaders do three things well: they highlight material model changes, connect them to operational risk, and skip the hype.

### A balanced reading stack

Mix one research-oriented source, one regulatory tracker, one incident-focused source, and one practitioner-led newsletter. Variety keeps you from mistaking a single worldview for the whole market.`,
  },
  {
    slug: 'cloud-incident-patterns-2026',
    title: 'Cloud Incident Patterns We Keep Seeing in 2026',
    excerpt:
      'A concise review of the cloud misconfigurations, identity failures, and response delays showing up again and again.',
    author: 'Elena Brooks',
    date: '2026-03-01',
    readingTime: '8 min read',
    category: 'Cybersecurity',
    keywords: ['cloud security', 'identity', 'incident response'],
    content: `## Recurring patterns

The exact root cause changes, but a few themes repeat: over-privileged automation, weak environment segmentation, delayed key rotation, and poor asset visibility.

### The quiet multiplier: identity

Identity systems often determine whether an incident stays narrow or becomes systemic. Shortening privilege duration and reducing standing access pay off more than one more dashboard.`,
  },
  {
    slug: 'secure-evals-for-enterprise-ai',
    title: 'Designing Enterprise AI Evaluations That Catch Security Regressions',
    excerpt:
      'Functional benchmarks are not enough. Security-sensitive evals need adversarial prompts, policy checks, and regression thresholds.',
    author: 'Maya Hart',
    date: '2026-02-25',
    readingTime: '7 min read',
    category: 'Both',
    keywords: ['evals', 'regressions', 'enterprise ai'],
    content: `## Expand what "quality" means

If your evaluation stack only measures helpfulness, you will miss the behaviors that matter in production. Secure evals should include disallowed content, policy adherence, secret handling, and tool restraint.

### Keep the loop tight

Run evals whenever the model, prompt template, or retrieval policy changes. Security regressions often arrive through product iteration, not major launches.`,
  },
  {
    slug: 'defending-startups-from-supply-chain-noise',
    title: 'Defending Startups From Supply Chain Noise Without Burning Out',
    excerpt:
      'A realistic way to prioritize package risk, signing, provenance, and response playbooks when your team is small.',
    author: 'Jordan Lee',
    date: '2026-02-20',
    readingTime: '6 min read',
    category: 'Cybersecurity',
    keywords: ['supply chain', 'startup security', 'provenance'],
    content: `## Small teams need usable controls

Startup security breaks when advice assumes a staffed platform team. Strong supply chain hygiene begins with a narrower dependency footprint, better defaults, and a clear emergency patch process.

### Focus on the highest leverage changes

Start with provenance checks for release artifacts, dependency review for new packages, and a single owner for emergency upgrade decisions.`,
  },
]
