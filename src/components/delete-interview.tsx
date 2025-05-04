// This component is responsible for deleting an interview. It uses a modal to confirm the deletion and a button to trigger the deletion process.
// It also uses Firebase Firestore to delete the interview document from the database and handles loading states and error messages.
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
// import { Modal } from "@/components/modal";
import { Interview } from "@/types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import Modal from "./model";

interface InterviewDeleteProps {
  initialData: Interview;
}

export const InterviewDelete = ({ initialData }: InterviewDeleteProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onDelete = async () => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "interviews", initialData.id));
      toast.success("Interview deleted successfully!");
      navigate("/generate");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete interview. Please try again.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2"
      >
        <Trash className="w-4 h-4" />
        Delete Interview
      </Button>

      <Modal
        title="Are you sure?"
        description="This will permanently delete the interview and all related data."
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex justify-end gap-3 pt-6">
          <Button
            disabled={loading}
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant="destructive"
            onClick={onDelete}
          >
            Yes, delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default InterviewDelete;
