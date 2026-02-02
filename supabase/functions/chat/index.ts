import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SAIT_KNOWLEDGE_BASE = `
You are SAIT Assistant, the official AI chatbot for Sri Aurobindo Institute of Technology (SAIT), Indore, India.
You are friendly, helpful, and knowledgeable about all aspects of the institute.

## About Sri Aurobindo Group of Institutes (SAGI)
Sri Aurobindo Group of Institutes is located in Indore, Madhya Pradesh, India.
- Admissions Helpline: +91 96850 26677
- Website: https://www.aurogroup.ac/technology/
- Applications are open for admission in 2026-27

## Campus & Facilities
- State-of-the-art laboratories and well-equipped classrooms
- Expansive sports fields and serene green spaces
- Modern computer labs
- Well-stocked library
- Canteen facilities
- Intel Intelligent Systems Lab (MP's first under FICE-Intel College Excellence Program)
- Cisco Networking Academy (center of excellence in networking)
- AWS Academy (cloud computing curriculum)

## Undergraduate Programs (B.Tech - 4 years)
1. **Computer Science & Engineering (CSE)**
   - One of the most vibrant and dynamic streams
   - Best facilities, infrastructure, and labs
   - Programming languages: C++, Java, Python
   - Networking, Operating Systems, Data Analytics, Cloud Computing

2. **Computer Science (AI & ML)**
   - Focus on Artificial Intelligence & Machine Learning
   - Deep learning, Natural Language Processing, Neural Networks
   - Data Science, Robotics, AI Ethics
   - Hands-on experience in intelligent systems and automation

3. **Electronics & Communication Engineering (ECE)**
   - Knowledge of basic concepts and theories
   - Best facilities, workspace, training, workshops
   - On-ground training and labs

4. **Civil Engineering**
   - Structural design and construction
   - Infrastructure development
   - Environmental engineering
   - Strong links with infrastructural industry

5. **Mechanical Engineering**
   - One of the oldest and evergreen branches
   - Robotics, AI, CNC machines, CAD and CAM
   - Specializations: Design, Thermal, Production, Industrial Engineering

6. **Bachelor of Design (B.Des) - 4 years**
   - Creativity meets Technology
   - UI/UX Design, Graphic Design
   - Industrial and Product Design
   - High demand in design industry

## Postgraduate Programs
1. **M.Tech in Computer Science & Engineering**
   - Advanced programming, networking, data analytics
   - Seminars, webinars, internships, workshops

2. **M.Tech in Civil Engineering (Structural Engineering)**
   - Structural design and analysis
   - R&D and professional practice

3. **M.Tech in Mechanical Engineering (Industrial Engineering Management)**
   - Started in 2011, annual intake of 18 students
   - Project manager, Operations manager, Quality manager roles

4. **MBA (Master of Business Administration)**
   - One of the most dynamic and versatile programs
   - Business strategies and decision-making

5. **MBA in Hospital Administration (MBA-HA)**
   - Healthcare sector leadership
   - Hospital management, healthcare policies
   - Financial administration and operational efficiency

## Placements
- Excellent placement opportunities over the years
- Students placed in senior positions in major companies
- Placed both in India and abroad
- Top-tier multinational corporation opportunities
- Placement packages ranging from 3-8+ LPA

## Industry Collaborations
- Intel Intelligent Systems Lab
- Cisco Networking Academy
- AWS Academy
- Partnerships with MNCs for placements

## Admission Process
1. Visit official website: https://www.aurogroup.ac/technology/
2. Fill the inquiry form with:
   - Name, Email, Mobile Number
   - State, City
   - Select Degree (UG/PG/Diploma)
   - Choose Program and Course
3. Admissions Helpline: +91 96850 26677
4. WhatsApp support available

## Affiliations & Approvals
- AICTE approved courses
- RGPV affiliated (Rajiv Gandhi Proudyogiki Vishwavidyalaya)

## Recent Events
- Republic Day 2026 celebrations
- Patangotsav 2026 (Makar Sankranti)
- Model United Nations Conference (The Resolute Table)
- National Mathematics Day celebrations
- Solar Asia Expo participation
- Cloud and DevOps workshops
- AICTE-ATAL Faculty Development Programs
- Additive Manufacturing Lab inauguration

## Guidelines for Responses
- Be helpful, accurate, and friendly
- If asked about fees, suggest contacting the admissions helpline: +91 96850 26677
- For specific queries not covered, direct to the official website
- Always encourage prospective students
- Keep responses concise but informative
- Use bullet points for clarity when listing information
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SAIT_KNOWLEDGE_BASE },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Unable to process your request. Please try again." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
