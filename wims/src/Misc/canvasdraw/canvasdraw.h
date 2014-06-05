#define canvas_iscalculation(x) ( ((x&~32)>='A' && (x&~32)<='Z') || ( x == '/' ) || (x == '*') || (x == '+') || x == '-' || x == '^' || x == '(' || x == ')' )
#define MAX_INT		64
#define MAX_BUFFER 16384
#define MAX_COLOR_STRING	32
#define MAX_JS_FUNCTIONS 64

#define END 		-1
#define COMMENT 	-2
#define SIZE 		1
#define XRANGE 		2
#define YRANGE 		3
#define FONTFAMILY 	4
#define MATHML 		5
#define INPUT 		6
#define TEXTAREA 	7
#define LINEWIDTH 	8
#define POLYLINE 	9
#define POLY 		10
#define SEGMENT		15
#define LINE 		16
#define DLINE 		17
#define RECT 		18
#define ARC 		19
#define NEW 		20
#define STRING 		21
#define STRINGUP 	22
#define COPY	 	23
#define COPYRESIZED 	24
#define TRANSPARENT 	25
#define POINT 		26
#define CIRCLE 		27
#define GETPIXEL 	28
#define SQUARE 		29
#define EMPTY 		30
#define ELLIPSE 	31
#define ROTATE 		32
#define TYPE 		33
#define QUALITY 	34
#define INPUTSTYLE 	35
#define POINTS 		36
#define TRIANGLE 	37
#define HLINE		38
#define VLINE		39
#define GRID		40
#define ZOOM		41
#define ARROW		42
#define DARROW		43
#define AXIS		44
#define FONTSIZE	46
#define	CURVE		50
#define PLOTSTEPS	51
#define TRANGE		53
#define MOUSE_PRECISION 54
#define FLY_TEXT	55
#define FLY_TEXTUP	56
#define BGIMAGE		57
#define DASHED		58
#define PARALLEL	59
#define LATTICE		60
#define OPACITY		61
#define AXIS_NUMBERING	62
#define RAYS		63
#define OUTPUT		64
#define CLOCK		65
#define STYLE		66
#define USERDRAW	67
#define MOUSE		68
#define AUDIO		69
#define AUDIOOBJECT	70
#define STOP		71
#define RESTART		72
#define FILLCOLOR	73
#define CUBE		74
#define BUTTON		75
#define ONCLICK		76
#define CROSSHAIR	77
#define CROSSHAIRS	78
#define BLINK		79
#define DASHTYPE	80
#define HTML		81
#define CROSSHAIRSIZE	82
#define ARROWHEAD	83
#define DRAG		84
#define HTTP		85
#define SLIDER		86
#define CLICKTILE	88
#define CLICKTILE_COLORS	89
#define TRANSLATION	90
#define KILLTRANSLATION	91
#define ARROW2		92
#define DARROW2		93
#define SVGCODE		95
#define ROUNDRECT	96
#define HATCHFILL	97
#define PATTERNFILL	98
#define DIAMONDFILL	99
#define DOTFILL		100
#define GRIDFILL	101
#define IMAGEFILL	102
#define FILL		103
#define FILLED		104
#define XYLOGSCALE	105
#define XLOGSCALE	106
#define YLOGSCALE	107
#define XLOGBASE	108
#define INTOOLTIP	109
#define REPLYFORMAT	110
#define VIDEO		111
#define BGCOLOR		112
#define FLOODFILL	113
#define FILLTOBORDER	114
#define CLICKFILL	115
#define SETPIXEL	117
#define PIXELS		118
#define PIXELSIZE	119
#define CLICKFILLMARGE	120
#define X_AXIS_STRINGS	121
#define Y_AXIS_STRINGS	122
#define FONTCOLOR	123
#define PIECHART	124
#define LEGEND		125
#define BARCHART	126
#define LINEGRAPH	127
#define STROKECOLOR	128
#define XLABEL		129
#define YLABEL		130
#define LEGENDCOLORS	131
#define ANIMATE		132
#define STATUS		133 
#define SNAPTOGRID	134
#define XSNAPTOGRID	135
#define YSNAPTOGRID	136
#define USERINPUT_XY	137
#define USERTEXTAREA_XY	138
#define SGRAPH		139
#define YLOGBASE	140
#define AFFINE		141
#define KILLAFFINE	142
#define LEVELCURVE	143
#define JSMATH		144
#define TRACE_JSCURVE	145
#define SETLIMITS	146
#define JSCURVE		147


#define DRAW_GRID	0
#define DRAW_SEGMENTS	1
#define DRAW_CROSSHAIRS	2
#define DRAW_RECTS	3
#define DRAW_ROUNDRECTS	4
#define DRAW_ARROWS	6
#define DRAW_GRIDFILL	7
#define DRAW_XML	8
#define DRAW_CIRCLES	9
#define DRAW_ARCS	10
#define DRAW_ELLIPSES	11
#define DRAW_TEXTS	12
#define DRAW_CURVE	13
#define DRAW_PATHS	14
#define DRAW_LATTICE	15
#define DRAW_INPUTS	16
#define DRAW_TEXTAREAS	17
#define DRAW_HTTP	18
#define DRAW_AUDIO	19
#define DRAW_VIDEO	20
#define DRAW_DOTFILL	21
#define DRAW_HATCHFILL	22
#define DRAW_IMAGEFILL  23
#define DRAW_ZOOM_BUTTONS 24
#define DRAW_FLOODFILL	25
#define DRAW_FILLTOBORDER	26
#define DRAW_PIXELS	27
#define DRAW_POLY	28
#define DRAW_LINES	29
#define DRAW_PIECHART	30
#define DRAW_CLOCK	31
#define DRAW_EXTERNAL_IMAGE	32
#define DRAG_EXTERNAL_IMAGE	33
#define DRAW_DIAMONDFILL	34
#define DRAW_SGRAPH	35
#define DRAW_POLYLINE	36
#define DRAW_YLOGSCALE	37
#define DRAW_XLOGSCALE	38
#define DRAW_XYLOGSCALE	39

#define BG_CANVAS	0
#define STATIC_CANVAS	1
#define MOUSE_CANVAS	2
#define GRID_CANVAS	3
#define DRAG_CANVAS	4
#define DRAW_CANVAS	5
#define TEXT_CANVAS	6
#define EXTERNAL_DRAG_CANVAS 7
#define EXTERNAL_IMAGE_CANVAS 8
#define CLOCK_CANVAS	9
#define ANIMATE_CANVAS	10
#define TRACE_CANVAS	11
#define JSPLOT_CANVAS	12

#ifndef STD_H
#define STD_H

#ifndef bool
#define bool            char
#endif
#ifndef TRUE
#define TRUE            1
#endif
#ifndef FALSE
#define FALSE           0
#endif

#endif

