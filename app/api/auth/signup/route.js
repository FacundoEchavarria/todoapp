import { createUser } from '@/app/libs/actions/user.actions';
import { userValidation } from '@/app/libs/validations/userValidation';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { userName, email, password } = await request.json();

  try {
    const isValid = userValidation(email, password, userName);
    if (!isValid.valid) {
      return NextResponse.json({ message: isValid.message }, { status: 400 });
    }

    const user = await createUser(email, password, userName);

    return NextResponse.json({ message: 'User created succesfully', user });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
