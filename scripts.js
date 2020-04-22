exports.scripts = {
	apps: {
		light:
			'Set-ItemProperty -Path HKCU:/Software/Microsoft/Windows/CurrentVersion/Themes/Personalize -Name AppsUseLightTheme -Value 1',
		dark:
			'Set-ItemProperty -Path HKCU:/Software/Microsoft/Windows/CurrentVersion/Themes/Personalize -Name AppsUseLightTheme -Value 0'
	},
	system: {
		light:
			'Set-ItemProperty -Path HKCU:/Software/Microsoft/Windows/CurrentVersion/Themes/Personalize -Name SystemUsesLightTheme -Value 1',
		dark:
			'Set-ItemProperty -Path HKCU:/Software/Microsoft/Windows/CurrentVersion/Themes/Personalize -Name SystemUsesLightTheme -Value 0'
	}
};
