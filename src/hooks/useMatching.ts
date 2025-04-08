import { useState, useRef } from 'react';
import { DisabledStudent, Supporter } from '../types/user';

export const useMatching = (initialDisabledStudents: DisabledStudent[]) => {
  const [disabledStudents, setDisabledStudents] = useState(initialDisabledStudents);
  const selectingStudentRef = useRef<DisabledStudent | null>(null);

  const handleMatchingStart = (student: DisabledStudent, supporters: Supporter[]) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id 
        ? { 
            ...s, 
            matchingStatus: "selecting",
            matchingCandidates: supporters
          } 
        : s
    ));
    selectingStudentRef.current = student;
  };

  const handleSelectSupporter = (studentId: number) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === studentId ? { ...s, matchingStatus: "completed" } : s
    ));
    selectingStudentRef.current = null;
  };

  const handleMatchingEdit = (student: DisabledStudent) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id ? { ...s, matchingStatus: "selecting" } : s
    ));
    selectingStudentRef.current = student;
  };

  const handleMatchingCancel = (student: DisabledStudent) => {
    setDisabledStudents(prev => prev.map(s => 
      s.id === student.id ? { ...s, matchingStatus: "waiting" } : s
    ));
    selectingStudentRef.current = null;
  };

  const handleConfirm = (studentId: number) => {
    setDisabledStudents(prev =>
      prev.map(student =>
        student.id === studentId
          ? { ...student, matchingStatus: "completed", matchingCandidates: [] }
          : student
      )
    );
    selectingStudentRef.current = null;
  };

  return {
    disabledStudents,
    selectingStudentRef,
    handleMatchingStart,
    handleSelectSupporter,
    handleMatchingEdit,
    handleMatchingCancel,
    handleConfirm,
  };
}; 