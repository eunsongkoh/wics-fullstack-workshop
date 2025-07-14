import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

import { BaseInterview, Interview } from "@/models/interview";
import { db } from "@/lib/firebase/firebaseConfig";

export async function createInterview(
  userId: string,
  interview_info: BaseInterview
) {
  const interviewsCollection = collection(db, "users", userId, "interviews");
  const interviewDoc = await addDoc(interviewsCollection, interview_info);

  return interviewDoc.id;
}

export async function getInterviews(userId: string): Promise<Interview[]> {
  const interviewsCollection = collection(db, "users", userId, "interviews");
  const interviewsSnapshot = await getDocs(interviewsCollection);

  const interviewsData = interviewsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
  return interviewsData;
}

export async function getInterviewById(userId: string, interviewId: string) {
  const interviewDoc = doc(db, "users", userId, "interviews", interviewId);
  const interviewSnapshot = await getDoc(interviewDoc);

  if (interviewSnapshot.exists()) {
    return {
      id: interviewSnapshot.id,
      ...interviewSnapshot.data(),
    } as Interview;
  } else {
    throw new Error("Interview not found");
  }
}
