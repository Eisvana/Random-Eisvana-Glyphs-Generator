export function getRegions(galaxy: string): Set<string> {
	const regionGlyphs = [
		'F9556C30',
		'F9555C30',
		'F9555C31',
		'F9556C31',
		'F9557C31',
		'F9557C30',
		'F9557C2F',
		'F9556C2F',
		'F9555C2F',
		'FA556C30',
		'F8556C30',
	];

	const EisHubGlyphs = [
		'FA555C30',
		'FA555C31',
		'FA556C31',
		'FA557C31',
		'FA557C30',
		'FA557C2F',
		'FA556C2F',
		'FA555C2F',
		'F8555C30',
		'F8555C31',
		'F8556C31',
		'F8557C31',
		'F8557C30',
		'F8557C2F',
		'F8556C2F',
		'F8555C2F',
	];
	if (galaxy == 'Eissentam')
		regionGlyphs.push(...EisHubGlyphs);
	return new Set(regionGlyphs);
}