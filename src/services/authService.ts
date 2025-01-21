interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  email: string;
  password: string;
  name: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signUpUser = async (credentials: SignUpCredentials): Promise<LoginResponse> => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};