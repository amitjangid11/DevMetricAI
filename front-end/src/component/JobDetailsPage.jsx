import {
  MapPin,
  Clock,
  Building2,
  Calendar,
  Mail,
  DollarSign,
  Star,
  CheckCircle,
} from "lucide-react";

export default function JobDetailsPage({ jobData }) {
  const {
    jobBasicForm,
    jobDetailForm,
    responsibilities,
    skillAndRequirenmentForm,
    compensationAndPerksForm,
    applicationSettingForm,
  } = jobData;

  const formatDeadline = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 mb-6">
            <h1 className="text-4xl font-bold text-white">
              {jobBasicForm.jobTitle}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>{jobBasicForm.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{jobBasicForm.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{jobBasicForm.employment}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="inline-block rounded bg-gray-800 px-3 py-1 text-sm text-gray-200">
              {jobDetailForm.yearsOfExperience} years experience required
            </span>
            <span className="inline-flex items-center gap-1 rounded border border-gray-700 px-3 py-1 text-sm text-gray-300">
              <Calendar className="h-3 w-3" />
              Apply by {formatDeadline(applicationSettingForm.applicationDeadline)}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow p-6">
              <h2 className="text-xl font-semibold mb-3 text-white">
                Job Description
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {jobDetailForm.jobDesc}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow p-6">
              <h2 className="text-xl font-semibold mb-3 text-white">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 leading-relaxed">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Requirements */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow p-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Skills & Requirements
              </h2>

              <div>
                <h4 className="font-medium mb-3 text-gray-200">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillAndRequirenmentForm.selectedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block rounded bg-gray-800 px-3 py-1 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-700 my-3" />

              <div>
                <h4 className="font-medium mb-3 text-gray-200">
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillAndRequirenmentForm.selectedLanguages.map(
                    (language, index) => (
                      <span
                        key={index}
                        className="inline-block rounded border border-gray-700 px-3 py-1 text-sm text-gray-300"
                      >
                        {language}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Compensation */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-2 text-white">
                <DollarSign className="h-5 w-5" /> Compensation
              </h2>
              <div className="text-2xl font-bold text-blue-500 mb-2">
                {compensationAndPerksForm.salaryRange} LPA
              </div>
              <p className="text-sm text-gray-500">Annual salary</p>
            </div>

            {/* Perks & Benefits */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-white">
                <Star className="h-5 w-5" /> Perks & Benefits
              </h2>
              <ul className="space-y-2">
                {compensationAndPerksForm.perks.map((perk, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-300">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow p-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">Apply Now</h2>
              <div className="text-sm text-gray-400">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4" />
                  <span>Send your application to:</span>
                </div>
                <p className="font-medium text-gray-200">
                  {applicationSettingForm.howToApply.email}
                </p>
              </div>
              <button className="w-full rounded-lg bg-blue-600 text-white py-2 px-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                <Mail className="h-4 w-4" />
                Apply via Email
              </button>
              <div className="text-xs text-gray-500 text-center">
                Application deadline:{" "}
                {formatDeadline(applicationSettingForm.applicationDeadline)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
