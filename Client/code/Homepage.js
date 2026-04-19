/* ==========================
   BACKEND (Node.js) - AI STUDENT ECOSYSTEM
   ========================== */


/* ==========================
   FRONTEND (React) - SAME UI STYLE CLASSES KEPT
   ========================== */

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendation } from "./authSlice";

const features = [
  {
    icon: "🎯",
    tag: "PERSONALIZED",
    title: "AI Career Navigator",
    desc: "Recommends best-fit countries, courses, and universities using AI reasoning.",
    color: "feat-purple",
  },
  {
    icon: "📊",
    tag: "PREDICTIVE",
    title: "Admission & ROI Engine",
    desc: "Predicts admission chances and future salary vs education cost.",
    color: "feat-blue",
  },
  {
    icon: "💰",
    tag: "FINANCE READY",
    title: "Loan & Scholarship System",
    desc: "Finds eligibility, loans, scholarships, and repayment planning.",
    color: "feat-teal",
  },
  {
    icon: "🤖",
    tag: "AI COPILOT",
    title: "Guided Application Flow",
    desc: "Chat-based assistant for SOPs, visas, timelines, and documents.",
    color: "feat-amber",
  },
];

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.recommendation);
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    dispatch(getRecommendation(formData));
  };

  return (
    <div className="tv-page">

      <nav className="tv-nav">
        <div className="tv-nav-inner">
          <a href="/" className="tv-logo">
            <span className="tv-logo-main">STUDYVERSE</span>
            <span className="tv-logo-sub">AI Ecosystem</span>
          </a>
        </div>
      </nav>

      <section className="tv-hero">
        <div className="tv-hero-content">

          <div className="tv-hero-left">
            <div className="tv-form-card">

              <h1 className="tv-form-title">Your Study Abroad Journey 🎓</h1>

              {error && <div className="tv-server-error">{error}</div>}

              <form onSubmit={handleSubmit(submit)}>

                <div className="tv-form-group">
                  <label>Journey Stage</label>
                  <select {...register("stage")}>
                    <option value="exploration">Exploration</option>
                    <option value="shortlisting">Shortlisting</option>
                    <option value="application">Application</option>
                    <option value="finalization">Finalization</option>
                  </select>
                </div>

                <div className="tv-form-group">
                  <label>Field of Study</label>
                  <select {...register("fieldOfStudy")}>
                    <option value="cs">Computer Science</option>
                    <option value="mba">MBA</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                </div>

                <div className="tv-form-group">
                  <label>Target Country</label>
                  <select {...register("goalCountry")}>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="europe">Europe</option>
                    <option value="india">India</option>
                  </select>
                </div>

                <div className="tv-form-group">
                  <label>Budget</label>
                  <select {...register("budget")}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <button className="tv-btn-hero" type="submit">
                  Generate AI Guidance →
                </button>
              </form>

              {loading && (
                <div className="tv-spinner-container">
                  <div className="tv-spinner"></div>
                  <p className="tv-spinner-text">Building your ecosystem...</p>
                </div>
              )}

              {data && (
                <div className="tv-preview-card">
                  <div className="tv-preview-header">
                    <span className="tv-preview-label">Your AI Study Ecosystem</span>
                  </div>

                  <div className="tv-stack-list">
                    {data.stack?.map((s, idx) => (
                      <div key={idx} className="tv-stack-row">
                        <span className="tv-stack-label">{s.label}</span>
                        <span className="tv-stack-value">{s.value}</span>
                        <span className="tv-stack-check">✓</span>
                      </div>
                    ))}
                  </div>

                  <div className="tv-preview-reason">
                    <span className="tv-reason-icon">🧠</span>
                    <p>{data.reason}</p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      <section className="tv-features">
        <div className="tv-section-inner">
          <div className="tv-feat-grid">
            {features.map((f) => (
              <div key={f.title} className={`tv-feat-card ${f.color}`}>
                <div className="tv-feat-top">
                  <span className="tv-feat-tag">{f.tag}</span>
                  <span className="tv-feat-icon">{f.icon}</span>
                </div>
                <h3 className="tv-feat-title">{f.title}</h3>
                <p className="tv-feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
