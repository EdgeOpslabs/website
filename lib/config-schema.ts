import { z } from "zod";
import configData from "@/config/config.json";

// Schema for Community Creators
export const CreatorSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    linkedin: z.string().url().optional(),
    discord: z.string().url().optional(),
    portfolio: z.string().url().optional(),
    isCenter: z.boolean().optional(),
});

// Schema for Active Nodes (Members)
export const ActiveNodeSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    linkedin: z.string().url().optional(),
    discord: z.string().url().optional(),
});

// Full Site Config Schema
export const ConfigSchema = z.object({
    community: z.object({
        creators: z.array(CreatorSchema),
        activeNodes: z.array(ActiveNodeSchema),
    }),
});

// Infer types from schemas
export type Creator = z.infer<typeof CreatorSchema>;
export type ActiveNode = z.infer<typeof ActiveNodeSchema>;
export type SiteConfig = z.infer<typeof ConfigSchema>;

// Validate and export the parsed config
// This will throw a helpful error at build/runtime if config.json is invalid
export const siteConfig: SiteConfig = ConfigSchema.parse(configData);
