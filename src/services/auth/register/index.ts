export interface UserRegisterRequest {
    studentId: number;
    name: string;
    department: string;
    gender: 'MALE' | 'FEMALE';
    grade: string;
    password: string;
    role: 'SUPPORTER' | 'DISABLED_STUDENT' | 'ADMIN';
    disabilityType: 'PHYSICAL_DISABILITY' | 'HEARING_DISABILITY' | 'VISUAL_DISABILITY' | 'CEREBRAL_DISABILITY' | 'INTELLECTUAL_DISABILITY';
}

export const register = async (data: UserRegisterRequest) => {
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('회원가입 실패');
    }

    return await response.json();
};