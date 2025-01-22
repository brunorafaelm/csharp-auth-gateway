import { supabase } from "@/integrations/supabase/client";

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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) throw error;

    return {
      token: data.session?.access_token || '',
      user: {
        id: data.user?.id || '',
        email: data.user?.email || '',
        name: data.user?.email?.split('@')[0] || '', // Using email prefix as name since Supabase doesn't store names by default
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signUpUser = async (credentials: SignUpCredentials): Promise<LoginResponse> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        data: {
          name: credentials.name,
        },
      },
    });

    if (error) throw error;

    return {
      token: data.session?.access_token || '',
      user: {
        id: data.user?.id || '',
        email: data.user?.email || '',
        name: credentials.name,
      },
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};