import Image from "next/image";
import Chips from "@/components/Chips";
import MaterialsCarousel from "@/components/MaterialsCarousel";
import HarmonyCarousel from "@/components/HarmonyCarousel";
import styles from "@/styles/harmony.module.css";

export default function Harmony() {
  return (
    <section className={styles.harmonyPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h2 className={styles.title}>Harmony</h2>
        <div className={styles.tags}>
          <Chips items={["UI/UX", "App Design", "Case Study"]} />
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src="/images/harmony_banner_official.png"
          alt="Harmony Hero Banner"
          width={1200}
          height={400}
          className={styles.featuredImage}
        />
      </div>
      <div className={styles.link}>
        <a
          href="https://solid-app.fly.dev/api/auth/landing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewLink}
        >
          View Harmony
        </a>
      </div>

      {/* Overview Section */}
      <div className={styles.aboutContainer}>
        <h3 className={styles.aboutTitle}>About</h3>
        <div className={styles.aboutContent}>
          <div className={styles.aboutDetails}>
            <div className={styles.detailBlock}>
              <h3 className={styles.detailHeading}>Timeline</h3>
              <p className={styles.detailText}>2 WEEKS | NOV. 2024</p>
            </div>
            <div className={styles.detailBlock}>
              <h3 className={styles.detailHeading}>Tools</h3>
              <p className={styles.detailText}>PHOTOSHOP</p>
              <p className={styles.detailText}>ILLUSTRATOR</p>
            </div>
          </div>

          <div className={styles.aboutText}>
            <h3 className={styles.detailHeading}>Understanding Caregiving Needs</h3>
            <p>
              Caregiving can be overwhelming, especially for those managing multiple tasks while coordinating with family members or caregiving teams. Caregivers often struggle with balancing caregiving responsibilities, work, and personal obligations. This leads to increased stress, confusion, and a lack of clear communication among caregiving teams.
            </p>

            <h3 className={styles.detailHeading}>Caregiving Challenges</h3>
            <p><strong>Overwhelming responsibilities:</strong> Managing appointments, medications, and daily caregiving tasks can quickly become unmanageable.</p>
            <p><strong>Communication gaps:</strong> Family members are often left out of the loop regarding caregiving updates, resulting in added stress.</p>
            <p><strong>Emotional strain and uncertainty:</strong> The emotional burden of caregiving, combined with navigating unexpected changes, makes the process even more difficult.</p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <section className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Solution</h2>
      </section>
      <div className={styles.solutionCards}>
        <div className={styles.solutionCard}>
          <h3>1. EASE STRESS AND OVERLOAD</h3>
          <p>
            Harmony helps lighten the load by keeping things organized and making it easier to share tasks. This reduces stress and allows caregivers to focus on providing care without feeling burned out.
          </p>
        </div>
        <div className={styles.solutionCard}>
          <h3>2. STRENGTHEN COMMUNICATION</h3>
          <p>
            Harmony serves as a centralized platform where caregiving teams can share updates and stay connected. This keeps everyone informed, helping caregivers feel supported and work better together.
          </p>
        </div>
        <div className={styles.solutionCard}>
          <h3>3. PROVIDE CLARITY AND CONFIDENCE</h3>
          <p>
            Harmony provides clarity, helping caregivers feel confident and in control. With everything organized, it&apos;s easier to handle changes and give care with peace of mind.
          </p>
        </div>
      </div>

      {/* Research Section */}
      <section className={styles.aboutContainer}>
        <h2 className={styles.sectionTitle}>Research</h2>
        <div className={styles.researchIntro}>
          <h3 className={styles.detailHeading}>User Research</h3>
          <em className={styles.emphasis}>
            12 CAREGIVERS WERE INTERVIEWED TO GAIN FIRSTHAND INSIGHTS INTO THEIR DAILY CHALLENGES AND NEEDS.
          </em>
          <p className={styles.text}>
            Twelve participants were interviewed, representing diverse caregiving experiences, age groups, and backgrounds. Key findings revealed common struggles with time management, communication gaps, and emotional stress, particularly for those managing multiple caregiving roles.
          </p>
        </div>
      </section>

      <div className={styles.statsWrapper}>
        <div className={styles.statsBanner}>
          <div className={styles.statItem}>
            <div className={styles.statBoxA}>100%</div>
            <div className={styles.statBoxB}>
              Reported experiencing emotional challenges or feeling overwhelmed at some point in their caregiving journey.
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statBoxA}>91.7%</div>
            <div className={styles.statBoxB}>
              Relied on support systems like family, friends, healthcare aides, or community groups to reduce stress.
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statBoxA}>50%</div>
            <div className={styles.statBoxB}>
              Reported often struggling to balance responsibilities, stay organized, and manage daily routines.
            </div>
          </div>
        </div>
      </div>

      <p className={styles.text}>
        Secondary research supported these findings, highlighting the growing acceptance of technology in caregiving, especially tools for scheduling and communication. Insights from this research shaped the core features of Harmony, focusing on collaboration, task management, and real-time updates to improve the caregiving experience.
      </p>

      {/* User Personas */}
      <section className={styles.aboutContainer}>
        <h3 className={styles.detailHeading}>User Personas</h3>
        <p className={styles.text}>
          To better understand the diverse needs and experiences of caregivers, a user persona was created based on the key findings from conducted research.
        </p>
        <div className={styles.personas}>
          <Image
            src="/images/1_Persona.png"
            alt="User Persona 1"
            width={600}
            height={700}
            className={styles.featuredPersona}
          />
          <Image
            src="/images/1_Persona-1.png"
            alt="User Persona 2"
            width={600}
            height={700}
            className={styles.featuredPersona}
          />
        </div>
      </section>

      {/* User Flow */}
      <section className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Design</h2>
        <h3 className={styles.detailHeading}>User Flow</h3>
        <p className={styles.text}>
          To ensure Harmony provides an intuitive experience that meets caregiving needs, a user flow was created to map key actions and decision points. This flow outlines the user&apos;s journey from onboarding to managing tasks, collaborating with teams, and accessing AI-powered assistance, optimizing the overall experience.
        </p>
        <div className={styles.iframeContainer}>
          <iframe
            width="800"
            height="450"
            src="https://embed.figma.com/board/mJNFZitCbtqaciaqQ5sY9K/Harmony-User-Flow?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Lo-Fi Design */}
      <section className={styles.aboutContainer}>
        <h3 className={styles.detailHeading}>Lo-Fi Prototype</h3>
        <p className={styles.text}>
          A lo-fi prototype was created to visualize the core structure and functionality of Harmony. The prototype focused on mapping key features, user interactions, and navigation flow, allowing for early feedback and iteration before moving into high-fidelity designs.
        </p>
        <div className={styles.lofi}>
          <Image
            src="/images/harmony_lofiDesigns.png"
            alt="Lo-Fi Screens 1"
            width={1200}
            height={1826}
            className={styles.lofiImage}
          />
        </div>
      </section>

      {/* Branding and Style Guide */}
      <section className={styles.aboutContainer}>
        <h3 className={styles.detailHeading}>Branding and Style Guide</h3>
        <p className={styles.text}>
          Before high-fidelity execution, a style guide and visual identity were developed to ensure consistency and reflect Harmony&apos;s core values of community, connection, and care. Drawing inspiration from minimal and functional design principles, the color palette emphasizes calm and balance, while the typography offers clarity and warmth. The design system focuses on reusable components and cohesive elements that create a seamless and intuitive user experience.
        </p>
        <div className={styles.styleguide}>
          <Image
            src="/images/harmony_styleguide.png"
            alt="Style Guide 1"
            width={1200}
            height={700}
            className={styles.styleguideImage}
          />
          <Image
            src="/images/harmony_styleguide2.png"
            alt="Style Guide 2"
            width={1200}
            height={700}
            className={styles.styleguideImage}
          />
        </div>
      </section>

      {/* Final Design */}
      <section className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Final Design</h2>
        <p className={styles.text}>
          The final design brings Harmony&apos;s vision to life by combining functionality with an intuitive design. Every design element was carefully crafted to reflect the app&apos;s core values of community, connection, and care. The result is a clean interface that simplifies caregiving tasks, fosters collaboration, and enhances the user experience with thoughtful, user-centric solutions.
        </p>
        <div className={styles.finalDesign}>
          <Image
            src="/images/harmony_finalDesigns.png"
            alt="Final Design Screens"
            width={1400}
            height={800}
            className={styles.finalDesignImage}
          />
        </div>
      </section>
      {/*Promotional Materials */}
      <section className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Promotional Materials</h2>
        <p className={styles.text}>
        To effectively introduce Harmony to its audience, promotional materials were created across various platforms, including a landing page, social media presence, and printed assets. Each element was strategically designed to reach and engage caregivers, reflecting the app’s mission and core values.
        </p>
      </section>

      {/* Printed Materials */}
      <section className={styles.aboutContainer}>
        <h3 className={styles.detailHeading}>Printed Materials</h3>
        <p className={styles.text}>
        Building on the promotional material designs, a range of printed collateral was developed to further elevate Harmony&rsquo;s presence. The materials, including brochures and posters, were designed to deliver key messaging in an accessible, clear, and impactful way.
        </p>
      </section>
      <MaterialsCarousel />

      {/* Landing Page */}
      <section className={styles.aboutContainer}>
        <h3 className={styles.detailHeading}>Landing Page</h3>
  
        <p className={styles.text}>
          The landing page for Harmony is designed to be simple, user-friendly, and visually engaging, with the goal of providing an immediate introduction to the app, showcasing its core benefits, and building trust with the audience.
        </p>
        <div className={styles.centerLink}>
        <a
          href="https://harmony-landing-page-omega.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewLink}
        >
          View Landing Page
        </a>
        </div>
        <div className={styles.landingPage}>
          <Image 
            src="/images/harmony_landingPage.png"
            alt="Landing page Image"
            width={1418}
            height={732}
            className={styles.landingPageImage}
          />
        </div>
      </section>

      {/* Showcase */}
      <section className={styles.aboutContainer}>
        <h3 className={styles.detailHeading}>D3 / FSWD Annual Student Design & Technology Showcase</h3>
        <p className={styles.text}>
        On December 6th, 2024, the team had the opportunity to present Harmony at BCIT&rsquo;s Annual D3 / FSWD Student Design & Technology Showcase. The event highlights student projects that use innovative digital solutions, with a focus on leveraging Artificial Intelligence to address challenges faced by underrepresented communities and businesses.
        </p>
        <p className={styles.text}>
        Out of 10 teams, Harmony placed second, receiving recognition for its impactful design and solution. The showcase was attended by influential members of the community, including the Mayor of Burnaby and his council, BCIT faculty, members of the Legislative Assembly, and key industry professionals.
        </p>
      </section>
      <HarmonyCarousel />
    </section>
  );
}
