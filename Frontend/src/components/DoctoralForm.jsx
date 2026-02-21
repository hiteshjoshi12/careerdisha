import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const DoctoralForm = () => {
  // A single state object to hold all 38 answers cleanly
  const [formData, setFormData] = useState({
    q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "", q8: "", q9: "", q10: "",
    q11: "", q12: "", q13: "", q14: "", q15: "", q16: "", q17: "", q18: "", q19: "", q20: "",
    q21: "", q22: "", q23: "", q24: "", q25: "", q26: "", q27: "", q28: "", q29: "", q30: "",
    q31: [], // Array for multiple country selections
    q32: "", q33: "", q34: "", q35: "", q36: "", q37: "", q38: ""
  });

  const handleUpdate = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field, value, maxLimit) => {
    setFormData((prev) => {
      let currentSelections = [...prev[field]];
      if (currentSelections.includes(value)) {
        currentSelections = currentSelections.filter((item) => item !== value);
      } else {
        if (currentSelections.length < maxLimit) {
          currentSelections.push(value);
        }
      }
      return { ...prev, [field]: currentSelections };
    });
  };

  const handleSave = () => {
    console.log("Saving Doctoral Data:", formData);
    // Add your API submission logic here
  };

  // ==========================================
  // REUSABLE UI BLOCKS FOR THE QUESTIONS
  // ==========================================

  const QuestionWrapper = ({ num, title, mandatory, children }) => (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden group hover:border-orange-500/30 transition-colors">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-orange-500 font-bold shrink-0">
          {num}
        </div>
        <div className="flex-1 w-full">
          <h4 className="text-white font-semibold mb-4 text-sm sm:text-base leading-relaxed">
            {title} {mandatory && <span className="text-red-500 text-xs ml-1 font-normal">(* Mandatory)</span>}
          </h4>
          {children}
        </div>
      </div>
    </div>
  );

  const SingleChoiceQuestion = ({ num, title, mandatory, options, field }) => (
    <QuestionWrapper num={num} title={title} mandatory={mandatory}>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleUpdate(field, opt)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
              formData[field] === opt 
              ? "bg-orange-600/10 border-orange-500 text-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.15)]" 
              : "bg-[#0a0a0a] border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </QuestionWrapper>
  );

  const MultiChoiceQuestion = ({ num, title, mandatory, options, field, max }) => (
    <QuestionWrapper num={num} title={title} mandatory={mandatory}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {options.map((opt) => {
          const isSelected = formData[field].includes(opt);
          const isDisabled = !isSelected && formData[field].length >= max;
          
          return (
            <button
              key={opt}
              onClick={() => handleMultiSelect(field, opt, max)}
              disabled={isDisabled}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left ${
                isSelected 
                ? "bg-orange-600/10 border-orange-500 text-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.15)]" 
                : isDisabled
                  ? "bg-[#0a0a0a] border-gray-800/50 text-gray-600 cursor-not-allowed"
                  : "bg-[#0a0a0a] border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              <div className={`w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "bg-orange-500 border-orange-500" : "border-gray-600"}`}>
                {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
              </div>
              <span className="truncate">{opt}</span>
            </button>
          )
        })}
      </div>
    </QuestionWrapper>
  );

  const TextAreaQuestion = ({ num, title, mandatory, field }) => (
    <QuestionWrapper num={num} title={title} mandatory={mandatory}>
      <textarea 
        value={formData[field]}
        onChange={(e) => handleUpdate(field, e.target.value)}
        placeholder="Enter Your Answer"
        rows="2"
        className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-gray-600 resize-none text-sm"
      />
      <p className="text-right text-[10px] text-gray-500 mt-2 uppercase tracking-widest">Only 300 Words</p>
    </QuestionWrapper>
  );

  // ==========================================
  // MAIN RENDER
  // ==========================================

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto flex flex-col gap-5 sm:gap-6 pb-12"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Complete your personalised study abroad journey</h2>
        <div className="bg-[#1a1a1a] border border-gray-700 text-orange-500 px-4 py-1.5 rounded-md font-bold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(234,88,12,0.1)]">
          Doctoral
        </div>
      </div>

      {/* 1-10 */}
      <SingleChoiceQuestion num="1" title="Preferred Intake" field="q1" options={["Jan 26", "Mar 26", "SEP 26", "JULY 26", "Later"]} />
      <TextAreaQuestion num="2" title="Your overall percentage in 10th Class" mandatory field="q2" />
      <SingleChoiceQuestion num="3" title="Your current status of 12th Class" field="q3" options={["Completed", "Pursuing"]} />
      <TextAreaQuestion num="4" title="Your overall percentage in 12th Class. If pursuing then expected percentage" mandatory field="q4" />
      <TextAreaQuestion num="5" title="Subject Combinations in 12th class or IBDP" mandatory field="q5" />
      <SingleChoiceQuestion num="6" title="Your Board in 12th Class" field="q6" options={["CBSE Board", "ICSE Board", "IB Board", "State Board", "Other Board"]} />
      <SingleChoiceQuestion num="7" title="Your IBDP point score (24 - 45) (If from IB board or else keep it blank)" field="q7" options={["24 - 31 points", "32 - 38 points", "39 - 45", "N/A"]} />
      <TextAreaQuestion num="8" title="Emergency Contact Number" mandatory field="q8" />
      <SingleChoiceQuestion num="9" title="Graduation (UG) Course type you pursued" field="q9" options={["Degree", "Diploma"]} />
      <SingleChoiceQuestion num="10" title="Graduation (UG) Duration you pursued" field="q10" options={["5 Years", "4 Years", "3 Years", "2 Years", "Lesser than 2 Years"]} />

      {/* 11-20 */}
      <SingleChoiceQuestion num="11" title="Your current status of graduation" field="q11" options={["Completed", "Pursuing final year"]} />
      <TextAreaQuestion num="12" title="Your Score in Bachelors (% or CGPA). If pursuing then expected score" field="q12" />
      <SingleChoiceQuestion num="13" title="Post Graduation (PG) Course type you pursued" field="q13" options={["Degree", "Diploma"]} />
      <SingleChoiceQuestion num="14" title="Post Graduation (PG) Duration you pursued" field="q14" options={["3 Years", "2 Years", "1 Year", "Lesser than 1 Year"]} />
      <SingleChoiceQuestion num="15" title="Your current status of Post graduation" field="q15" options={["Completed", "Pursuing final year"]} />
      <TextAreaQuestion num="16" title="Your Score in Post Graduation (% or CGPA). If pursuing then expected score" field="q16" />
      <TextAreaQuestion num="17" title="Project details of Masters" field="q17" />
      <TextAreaQuestion num="18" title="Country Preference" field="q18" />
      <TextAreaQuestion num="19" title="Year of Passed 10th class" mandatory field="q19" />
      <TextAreaQuestion num="20" title="Year of Pass 12th class" mandatory field="q20" />

      {/* 21-30 */}
      <TextAreaQuestion num="21" title="Year of Pass graduation" mandatory field="q21" />
      <TextAreaQuestion num="22" title="Year of Pass Post graduation" mandatory field="q22" />
      <SingleChoiceQuestion num="23" title="No. of backlogs/repeats (if any)" field="q23" options={["No Backlogs", "1 Backlogs", "2 Backlogs", "3-4 Backlogs", "More than 5 Backlogs"]} />
      <SingleChoiceQuestion num="24" title="Education Gap (In between studies or after studies)" field="q24" options={["No Gaps", "1 Yr Gap", "2 Yr Gap", "3 Yr Gap", "More than 3 Yr Gap"]} />
      <SingleChoiceQuestion num="25" title="Work Experience or internship project" field="q25" options={["No work experience", "0-6 Months Experience", "6-12 Months Experience", "2 Years Experience", "3 Years Experience", "more than 3 years Experience"]} />
      <SingleChoiceQuestion num="26" title="IELTS / TOEFL / PTE Score" field="q26" options={["Not Appeared", ">7.5 or 110 or 74", "6.6-7.5 or 89-108 or 59-73", "6.1-6.5 or 72-88 or 43-49", "5.5-6 or 69-71 or 35-42", "<5.5 or <69 or <35"]} />
      <TextAreaQuestion num="27" title="Individual score in IELTS / TOEFL / PTE Score (Listening, Reading, Writing, Speaking)" field="q27" />
      <SingleChoiceQuestion num="28" title="GMAT Score" field="q28" options={["Not Appeared", "700-800", "600-699", "500-599", "450-499", "300-449"]} />
      <SingleChoiceQuestion num="29" title="GRE Score" field="q29" options={["Not Appeared", "310-360", "300-310", "286-300", "279-285", "200-278"]} />
      <SingleChoiceQuestion num="30" title="Any Budget Constraint (Total Program Cost)" field="q30" options={["No budget Constraint", "30-40 Lakhs", "20-30 Lakhs", "10-20 Lakhs", "Lesser than 10 Lakhs"]} />

      {/* 31-38 */}
      <MultiChoiceQuestion num="31" title="Country Preference (Maximum 2 Country)" field="q31" max={2} options={["USA", "Canada", "UK", "Australia", "New Zealand", "Ireland", "Germany", "Rest Europe", "Other Countries"]} />
      <SingleChoiceQuestion num="32" title="Previous Visa rejections (if any)" field="q32" options={["No", "Yes"]} />
      <TextAreaQuestion num="33" title="Travel History (Countries visited/Travelled previously)" field="q33" />
      <TextAreaQuestion num="34" title="Course Preference you want to pursue" mandatory field="q34" />
      <TextAreaQuestion num="35" title="Any Specilaization Preference" field="q35" />
      <TextAreaQuestion num="36" title="Do you have any University/College preference?" field="q36" />
      <SingleChoiceQuestion num="37" title="Are you looking for Postgraduate degree/ diploma or certificate program" field="q37" options={["Postgraduate Degree Program", "Postgraduate Diploma Program", "Postgraduate Certificate Program"]} />
      <TextAreaQuestion num="38" title="Your Expectations" field="q38" />

      {/* Save Button */}
      <div className="flex justify-end mt-4">
        <button 
          onClick={handleSave} 
          className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95 w-full sm:w-auto"
        >
          <CheckCircle2 size={18} /> Save & Continue
        </button>
      </div>
      
    </motion.div>
  );
};

export default DoctoralForm;