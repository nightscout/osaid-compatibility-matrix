import type { Country } from '../types';

/**
 * Australia overlay. References catalog devices by ref ("deviceId" or
 * "deviceId:variantId") and layers on local availability, funding, official
 * stance and community. Compatibility itself is inherited from the catalog.
 *
 * Reviewed October 2026. Availability and funding move, so keep lastReviewed
 * honest. Official-position statements are paraphrased from each body's
 * published material; confirm wording at the linked source before relying on it.
 */
export const au: Country = {
	code: 'AU',
	name: 'Australia',
	status: 'live',
	lastReviewed: 'October 2026',
	maintainer: 'Nocturne community',
	intro:
		'What is available to Australians who want to close the loop. The pumps, the sensors, the algorithms they run, the funding, and where the official bodies stand. Maintained by the community and updated as the landscape moves.',

	listings: [
		// Pumps
		{ ref: 'omnipod-dash', availability: 'available', availabilityNote: 'Pods are an NDSS consumable. The device cost is either an out-of-pocket subscription with Insulet or covered by private hospital cover.', subsidy: ['omnipod'] },
		{ ref: 'omnipod-5', availability: 'available', availabilityNote: 'Pods are an NDSS consumable, supplied in Dexcom G7 (code 693), Libre 2 Plus (code 692) and, since 1 October 2026, Libre 3 Plus (code 694) versions. The pods you order have to match the CGM you are registered for with the NDSS. The device cost is either an out-of-pocket subscription with Insulet or covered by private hospital cover.', subsidy: ['omnipod'] },
		{ ref: 'tandem-mobi', availability: 'unavailable', availabilityNote: 'Listed on the ARTG, but a TGA listing does not mean it will be sold here, and its consumables are not on the NDSS Insulin Pump Consumables list.' },
		{ ref: 'tslim-x2:controliq-plus', availability: 'available', availabilityNote: 'Sold by AMSL Diabetes, consumables on the NDSS.', subsidy: ['pump-insurance', 'consumables', 'manufacturer-programs'] },
		{ ref: 'minimed-780g', availability: 'available', availabilityNote: 'Sold by Medtronic Australia with the Guardian 4 sensor.', subsidy: ['pump-insurance', 'consumables', 'manufacturer-programs'] },
		{ ref: 'ypsopump', availability: 'available', availabilityNote: 'Runs mylife CamAPS FX. Also offered under the Insulin Pump Program.', subsidy: ['pump-insurance', 'consumables', 'ipp', 'manufacturer-programs'] },
		{ ref: 'dana-i', availability: 'unavailable', availabilityNote: 'The Australian distributor has closed and no DANA consumables remain on the NDSS, so it can no longer be obtained or supported here. A unit imported from overseas is not a supported product.' },
		{ ref: 'dana-rs', availability: 'unavailable', availabilityNote: 'In-warranty DANA RS units were upgraded to the DANA-i. With the Australian DANA distributor now closed, it sits in the same position — no longer obtainable or supported here.' },
		{ ref: 'medtronic-paradigm:fw-old', availability: 'limited', availabilityNote: 'Out of warranty, second-hand units only.' },
		{ ref: 'accu-chek-combo', availability: 'unavailable', availabilityNote: 'Discontinued in 2021. Its consumables leave the NDSS at the end of June 2026.' },
		{ ref: 'omnipod-eros', availability: 'unavailable', availabilityNote: 'Legacy pods, no longer supplied in Australia.' },

		// Sensors
		{ ref: 'dexcom-g7', availability: 'available', availabilityNote: 'Subsidised through the NDSS since March 2025.', subsidy: ['cgm'] },
		{ ref: 'dexcom-one-plus', availability: 'available', availabilityNote: 'Available self-funded. Not on the NDSS type 1 list.' },
		{ ref: 'dexcom-g6', availability: 'limited', availabilityNote: 'Leaving the Australian market at the end of October 2026. Users move to the Dexcom G7.', subsidy: ['cgm'] },
		{ ref: 'libre2-plus', availability: 'available', availabilityNote: 'Subsidised through the NDSS since April 2025.', subsidy: ['cgm'] },
		{ ref: 'libre3-plus', availability: 'available', availabilityNote: 'Subsidised through the NDSS for all eligible registrants since 1 October 2026, after launching in December 2025 for mylife YpsoPump users.', subsidy: ['cgm'] },
		{ ref: 'libre2', availability: 'limited', availabilityNote: 'Leaving the NDSS on 1 July 2026. Users move to the Libre 2 Plus.' },
		{ ref: 'guardian-4', availability: 'available', availabilityNote: 'Subsidised through the NDSS, used with the MiniMed 780G.', subsidy: ['cgm'] }
	],

	officialPosition: {
		summary:
			'Open-source automated insulin delivery is not registered with the regulator in Australia. The pump and sensor hardware is regulated separately and remains approved. The bodies below acknowledge people who choose these systems to differing degrees. Statements are paraphrased from each body, confirm current wording at the source.',
		bodies: [
			{
				name: 'TGA',
				full: 'Therapeutic Goods Administration',
				stance: 'neutral',
				statement:
					'Open-source AID software is not entered on the Australian Register of Therapeutic Goods. Pumps and sensors are regulated as medical devices separately and remain approved.',
				source: 'https://www.tga.gov.au/resources/guidance/understanding-regulation-software-based-medical-devices',
				asOf: '2024'
			},
			{
				name: 'Diabetes Australia',
				full: 'Peak consumer body',
				stance: 'neutral',
				statement:
					'A position statement says Diabetes Australia does not endorse do-it-yourself technology, but that people should have choice and access, and should receive appropriate multidisciplinary support.',
				source: 'https://www.diabetesaustralia.com.au/wp-content/uploads/DIY-solution-position-statement.pdf',
				asOf: '2018'
			},
			{
				name: 'NDSS',
				full: 'National Diabetes Services Scheme',
				stance: 'neutral',
				statement:
					'Subsidises consumables, including CGM sensors and pump lines, based on clinical eligibility rather than the algorithm or system a person uses.',
				source: 'https://www.ndss.com.au/about-the-ndss/cgm-access/type-1-diabetes-aged-21-years-and-over/',
				asOf: '2026'
			}
		]
	},

	subsidies: [
		{
			id: 'cgm',
			name: 'CGM subsidy',
			via: 'NDSS',
			eligibility: 'All people with type 1 diabetes',
			covers:
				'Subsidised CGM and flash glucose sensors. Fully subsidised for registrants aged 21 and over with concessional status, otherwise a per-sensor co-payment applies.',
			note: 'Listed products include Dexcom G7 (March 2025), FreeStyle Libre 2 Plus (April 2025) and FreeStyle Libre 3 Plus (December 2025, open to all registrants from October 2026).',
			link: 'https://www.ndss.com.au/about-the-ndss/cgm-access/'
		},
		{
			id: 'pump-insurance',
			name: 'Insulin pump funding',
			via: 'Private health insurance',
			eligibility: 'Eligible hospital cover that includes insulin pumps',
			covers: 'The cost of the pump device, which is listed on the Australian Prescribed List of Medical Devices.',
			note: 'Waiting periods apply to a new policy for a pre-existing condition such as type 1 diabetes, and the included tier varies by insurer.',
			link: 'https://www.health.gov.au/topics/private-health-insurance/what-private-health-insurance-covers/prostheses-cover-under-private-health-insurance'
		},
		{
			id: 'consumables',
			name: 'Pump consumables',
			via: 'NDSS',
			eligibility: 'NDSS-registered pump users',
			covers: 'Subsidised infusion sets and reservoirs. Supply limits apply per period.',
			link: 'https://www.ndss.com.au/products/insulin-pump-consumables/'
		},
		{
			id: 'omnipod',
			name: 'Omnipod access',
			via: 'Insulet subscription or private health insurance',
			eligibility:
				'NDSS-registered people with type 1 diabetes. Omnipod is supplied as a consumable rather than a pump device, so it sits outside the insulin pump funding.',
			covers:
				'Pods two ways: a direct out-of-pocket subscription with Insulet (no lock-in, around $168 a box for Omnipod DASH and $185 for Omnipod 5), or, with eligible private hospital cover, the insurer covers the device cost. An NDSS co-payment still applies at the pharmacy, and supply is capped at 13 boxes a year.',
			note: 'Through private insurance the device is covered for up to 52 boxes, about four years, after which the per-box subscription price applies.',
			link: 'https://www.omnipod.com/en-au/subsidy'
		},
		{
			id: 'ipp',
			name: 'Insulin Pump Program',
			via: 'Breakthrough T1D',
			eligibility: 'Under 21, on a current Medicare card, family income under the program threshold, and not eligible for pump funding through private health insurance',
			covers: 'An insulin pump for families without private cover.',
			link: 'https://breakthrought1d.org.au/t1d-treatment-technology/insulin-pump-program/'
		},
		{
			id: 'manufacturer-programs',
			name: 'Manufacturer pump programs',
			via: 'Pump manufacturers',
			eligibility: 'Varies by manufacturer, and the programs have changed over time',
			covers:
				'Australia-specific gap, loan and upgrade programs run by individual manufacturers to reduce or spread the device cost — for example the Ypsomed gap program, Tandem (t:slim X2) and the Medtronic AccessPlus Program. Terms differ by vendor.',
			note: 'Contact the manufacturer directly for the current details of any such program.'
		}
	],

	groups: [
		{
			name: 'Aussie, Aussie, Aussie, Loop, Loop, LOOP!',
			platform: 'Facebook',
			blurb: 'Australian peer support for people using or learning do-it-yourself closed-loop systems.',
			link: 'https://www.facebook.com/groups/AussieLooping/'
		},
		{
			name: 'Type 1 Diabetes Family Centre',
			platform: 'Australia',
			blurb: 'Australian not-for-profit providing education, peer connection and clinical support for type 1 diabetes.',
			link: 'https://www.type1familycentre.org.au/'
		}
	]
};
