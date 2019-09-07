const defaults: BreakpointsList = {
	xxSmall: 320,
	xSmall: 375,
	small: 480,
	medium: 740,
	large: 980,
	xLarge: 1140,
	xxLarge: 1300,
}

let breakpoints = defaults

export const extendBreakpoints = (userBreakpoints: BreakpointsList) =>
	(breakpoints = Object.assign({}, userBreakpoints, breakpoints))

export const setBreakpoints = (userBreakpoints: BreakpointsList) =>
	(breakpoints = userBreakpoints)

export const resetBreakpoints = () => (breakpoints = defaults)

export type Breakpoints = keyof typeof breakpoints
export { breakpoints }