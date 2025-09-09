import React from "react";
import { Check } from "lucide-react";

const steps = [
  "Job Basics",
  "Job Details",
  "Skills & Requirements",
  "Compensation & Perks",
  "Application Settings",
];

function StepBar({ currentStep, className }) {
  return (
    <div className={`w-full py-8 ${className || ""}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          const circleClasses = `flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            isCompleted
              ? "border-blue-600 bg-blue-600 text-white"
              : isCurrent
              ? "border-blue-600 bg-white text-blue-600"
              : "border-gray-400 bg-white text-gray-400"
          }`;

          const labelClasses = `text-sm font-medium transition-colors duration-200 text-gray-400`;

          const lineClasses = `mx-4 h-0.5 w-16 transition-colors duration-200 lg:w-24 ${
            stepNumber < currentStep ? "bg-blue-600" : "bg-gray-400"
          }`;

          return (
            <div key={step} className="flex items-center">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div className={circleClasses}>
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{stepNumber}</span>
                  )}
                </div>

                {/* Step Label */}
                <div className="mt-3 text-center">
                  <p className={labelClasses}>{step}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && <div className={lineClasses} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepBar;
