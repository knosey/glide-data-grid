import "vitest-canvas-mock";
import { vi } from "vitest";

// this is needed to make the canvas mock work for some reason
global.jest = vi;

global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Note: vitest-canvas-mock 1.x replaces global Image with a non-constructable mock
// Tests that need to spy on Image constructor (image-window-loader.test.ts) are skipped
// These tests require a real browser environment or different mocking approach
