import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import type { LayoutServerLoad } from './$types';
import { eq } from 'drizzle-orm';

export const load: LayoutServerLoad = async () => {
	return {
		test: await db.select().from(user).where(eq(user.name, 'test'));
	};
};