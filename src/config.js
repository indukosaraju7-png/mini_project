// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://powerfit-6yr6.onrender.com';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/api/users/login`,
  MEMBER_SIGNUP: `${API_BASE_URL}/api/members/signup`,
  TRAINER_SIGNUP: `${API_BASE_URL}/api/trainers/signup`,
  
  // Members
  MEMBER_PROFILE: `${API_BASE_URL}/api/members/profile`,
  MEMBER_UPDATE_PLAN: `${API_BASE_URL}/api/members/update-plan`,
  MEMBER_ACTIVATE_MEMBERSHIP: `${API_BASE_URL}/api/members/activate-membership`,
  MEMBER_SELECT_TRAINER: `${API_BASE_URL}/api/members/select-trainer`,
  MEMBER_WORKOUTS: (memberId) => `${API_BASE_URL}/api/workout-plans/${memberId}`,
  MEMBER_DIET: (memberId) => `${API_BASE_URL}/api/diet-plans/${memberId}`,
  
  // Trainers
  TRAINERS: `${API_BASE_URL}/api/trainers`,
  TRAINER_PROFILE: `${API_BASE_URL}/api/trainers/profile`,
  TRAINER_MEMBERS: `${API_BASE_URL}/api/trainer/members`,
  
  // Admin
  ADMIN_MEMBERS: `${API_BASE_URL}/api/admin/members`,
  ADMIN_TRAINERS: `${API_BASE_URL}/api/admin/trainers`,
  
  // Payment
  VERIFY_PAYMENT: `${API_BASE_URL}/api/verify-payment`,
};
