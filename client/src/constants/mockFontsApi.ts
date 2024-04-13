export const mockFontsApi = {
	kind: "webfonts#webfontList",
	items: [
		{
			family: "Red Hat Text",
			variants: [
				"300",
				"regular",
				"500",
				"600",
				"700",
				"300italic",
				"italic",
				"500italic",
				"600italic",
				"700italic"
			],
			subsets: ["latin", "latin-ext"],
			version: "v13",
			lastModified: "2022-09-22",
			files: {
				"300":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML-ZwVrbacYVFtIY.ttf",
				regular:
					"http://fonts.gstatic.com/s/redhattext/v13/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML7hwVrbacYVFtIY.ttf",
				"500":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML4pwVrbacYVFtIY.ttf",
				"600":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML2Z3VrbacYVFtIY.ttf",
				"700":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML193VrbacYVFtIY.ttf",
				"300italic":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAz4PXQdadApIYv_g.ttf",
				italic:
					"http://fonts.gstatic.com/s/redhattext/v13/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzvvXQdadApIYv_g.ttf",
				"500italic":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzjPXQdadApIYv_g.ttf",
				"600italic":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzYPLQdadApIYv_g.ttf",
				"700italic":
					"http://fonts.gstatic.com/s/redhattext/v13/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzWfLQdadApIYv_g.ttf"
			},
			category: "sans-serif",
			kind: "webfonts#webfont",
			menu: "http://fonts.gstatic.com/s/redhattext/v13/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML7hwZrfQdQ.ttf"
		}
	]
};

export const mockFontsApiNames = mockFontsApi.items.map(({ family }) => family);
