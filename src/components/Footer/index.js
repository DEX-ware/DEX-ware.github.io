import React from 'react';
import SmallLogo from '../SVG/SmallLogo';
import styles from './index.module.css';

const items = [
	{
		title: 'Download',
		url: 'https://github.com/atomiclabs/dexware/releases/latest',
	},
	// {
	// 	title: 'Blog',
	// 	url: '/blog'
	// },
	{
		title: 'GitHub',
		url: 'https://github.com/atomiclabs/dexware',
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/dexwareapp',
	},
];

export default () => (
	<div className={styles.footer}>
		<SmallLogo/>
		<ul className={styles.navLinks}>
			{
				items.map(({title, url}) => <li key={title}><a href={url}>{title}</a></li>)
			}
		</ul>
	</div>
);
