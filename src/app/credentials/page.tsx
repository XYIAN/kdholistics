"use client";

import { motion } from "framer-motion";
import { Card } from "primereact/card";
import "@/styles/_credentials.scss";

const CredentialsPage = () => {
  const education = [
    {
      title: "Doctor of Naturopathic Medicine (In Progress)",
      institution: "Bastyr University",
      period: "2023 - 2028",
      details: [
        "Currently in second year of the Doctorate program",
        "Lead of Professional Development Committee, NMSA",
        "Board Member, Community Service Club",
        "Honors awarded in multiple courses",
      ],
      achievements: [
        "Certified in Level 1 Craniosacral Therapy (CST)",
        "Trained in fire and dry cupping techniques",
        "Trained in hydrotherapy techniques",
        "Trained in muscle mobilization techniques",
        "Experienced in botanical formulations",
      ],
    },
    {
      title: "Bachelor of Science - Integrated Health",
      institution:
        "Arizona State University - Edson College of Nursing and Health Innovation",
      period: "2015 - 2019",
      details: [
        "Dean&apos;s List at ASU (4.7 GPA)",
        "Dean&apos;s List at College of the Desert (4.0 GPA)",
        "ASU Success Coaching &apos;Connector Award&apos;",
        "ASU Success Coaching &apos;Hardest Working Coach&apos; Award",
      ],
    },
  ];

  const certifications = [
    {
      title: "Reiki Level I & II Practitioner",
      issuer: "Dr. Baljit Kaur Khamba, ND, M.PH, Ed.D(cand)",
      date: "October 2023",
      description:
        "Certified in energy healing techniques supporting physical, emotional, mental, and spiritual balance.",
    },
    {
      title: "Level 1 Craniosacral Therapy (CST)",
      issuer: "Dr. Gregory Yasuda, ND",
      date: "2023",
      description:
        "Specialized training in gentle, hands-on therapy working with the craniosacral system.",
    },
    {
      title: "Master Herbalist",
      issuer: "CPD/CE Certified, ICOES Accredited",
      date: "2023",
      description:
        "Comprehensive training in herbal medicine and botanical formulations.",
    },
  ];

  return (
    <main className="credentials-container">
      <div className="animated-background"></div>

      <motion.section
        className="credentials-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Education & Credentials</h1>
        <p>A journey of continuous learning and growth in holistic healing</p>
      </motion.section>

      <section className="education-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="education-card">
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <p className="period">{edu.period}</p>
              <ul>
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              {edu.achievements && (
                <>
                  <h5>Key Achievements</h5>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="cert-card">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
                <p className="description">{cert.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="philosophy-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card>
          <h2>Healing Philosophy</h2>
          <p>
            My approach is rooted in compassion, cultural awareness, and a deep
            respect for the body's innate wisdom. Through my studies and lived
            experiences, my mission is to help individuals access holistic,
            whole-person care that supports body, mind, and spirit. I'm
            passionate about integrating traditional healing with modern,
            evidence-informed care.
          </p>
        </Card>
      </motion.section>
    </main>
  );
};

export default CredentialsPage;
