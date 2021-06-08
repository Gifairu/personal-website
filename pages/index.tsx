import Head from 'next/head';
import styles from '../styles/Home.module.css';

import mySkills from './api/mySkills';
import socialMedia from './api/socialMedia';

export default function Home() {
	return (
		<div className={styles.main}>
			{/* Head */}
			<Head>
				<title>Gifairu - Personal Website</title>
				<meta name="description" content="Gifairu - Personal Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<div className="relative text-center">
				<img src="/Background.png" alt="Background" />
				<div className={styles.center}>
					<img src="/Logo.png" alt="Logo" width={40} className="mx-auto my-2" />
					<h1 className="text-2xl text-white font-light my-1">I'm Gifairu</h1>
					<p className="text-sm text-white font-medium">
						FullStack Developer {'&'} Linux Enthusiast
					</p>
				</div>
			</div>

			{/* About Me */}
			<div className="m-5 text-center">
				<h1 className={styles.about}>
					About <a className="font-medium">Me</a>
				</h1>

				<div className="text-center">
					<p className="text-sm text-white my-2 w-1/2 mx-auto">
						Hello, I'm FullStack Website Developer. I have a diverse set of skills, HTML and CSS,
						JavaScript, TypeScript, NodeJS, React, etc.
					</p>
					<p className="text-sm text-white my-4 w-1/2 mx-auto">
						Currently looking for a Job with over 2 years experience in JavaScript and NodeJS,
						highly understanding of Native Codes, and a fan of React Framework.
					</p>
				</div>
			</div>

			{/* Skills */}
			<div className={styles.mainSkills}>
				<h1 className={styles.skills}>
					My <a className="font-medium">Skills</a>
				</h1>

				<div className="mt-3 mr-4 flex flex-wrap">
					{mySkills.map((items) => {
						return (
							<div className={styles.mySkills}>
								<img src={items.image} alt={items.name} width={30} className="object-cover" />
								<p className="pl-2">{items.name}</p>
							</div>
						);
					})}
				</div>
			</div>

			{/* Footer */}
			<div className="p-5">
				<div className="flex flex-wrap items-center justify-center mb-5">
					{socialMedia.map((items) => {
						return (
							<a href={items.link}>
								<div className="mt-3 mx-5">
									<img src={items.image} alt={items.name} width={25} className="hover:opacity-75" />
								</div>
							</a>
						);
					})}
				</div>

				<p className="text-xs text-white text-center">
					Made with <a className="text-red-500">❤️</a> using TypeScript and NextJS
				</p>
			</div>
		</div>
	);
}
