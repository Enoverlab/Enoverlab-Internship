import useCloseDialog from "@/hooks/useCloseDialog";
import { memo, useState } from "react";
import { PiSealCheck } from "react-icons/pi";
import CustomBounceAnimation from "./CustomBounceAnimation";

interface CodeOfConductModalProps {
  open: boolean;
  handleClose: () => void;
}

const CodeOfConductModal: React.FC<CodeOfConductModalProps> = ({
  open,
  handleClose,
}) => {
  const { ref } = useCloseDialog(handleClose);

  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  if (!open) return null;

  const handleAgreeClick = () => {
    setLoading(true);

    // Set a timeout to simulate loading and show the checkmark icon after 3 seconds
    setTimeout(() => {
      setLoading(false);
      setAgreed(true);

      // Set another timeout to close the modal after showing the checkmark for 1 second
      setTimeout(() => {
        handleClose();
      }, 1000);
    }, 3000); // 3 seconds delay for loading
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={ref}
        className="relative mx-auto h-fit max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg bg-white px-6 py-8 shadow-lg"
      >
        <button
          onClick={handleClose}
          className="absolute right-6 top-3 text-3xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold text-primary-300">
          Code of Conduct
        </h2>

        <div className="mt-7">
          <h3 className="font-bold">1. Culture</h3>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>
              Interns are expected to respect everyone’s different backgrounds
              and experiences.
            </li>
            <li>
              Interns must be curious, eager to learn, and open to feedback.
            </li>
            <li>
              Interns will work under the supervision of professional Mentors.
            </li>
            <li>
              Interns must conduct themselves professionally at all times.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">2. Communication</h3>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>Interns are expected to communicate clearly with the team.</li>
            <li>Interns should be responsive and available at all times.</li>
            <li>
              Interns must collaborate effectively and listen to others’ ideas.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">3. Readiness</h3>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>
              Interns are expected to provide all tools and resources required.
            </li>
            <li>
              Interns must be punctual and attend all scheduled activities.
            </li>
            <li>Interns must commit 2-3 hours daily to their tasks.</li>
          </ul>
        </div>

        <div className="mt-7 flex items-center justify-center">
          {loading ? (
            <div className="flex items-center gap-1">
              <CustomBounceAnimation />
            </div>
          ) : (
            <button
              onClick={handleAgreeClick}
              className="rounded-lg bg-blue-600 px-8 py-2.5 text-sm text-white hover:bg-blue-700 focus:outline-none"
            >
              I Agree
            </button>
          )}

          {/* Display checkmark icon after loading */}
          {agreed && (
            <PiSealCheck
              className="animate-fade-in ml-3 text-blue-600"
              size={20}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(CodeOfConductModal);
