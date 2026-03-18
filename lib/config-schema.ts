import { z } from "zod";
import configData from "@/config/config.json";

// Schema for Community Creators
export const CreatorSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  avatar: z.string(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
  discord: z.string().url().optional(),
  portfolio: z.string().url().optional(),
  bio: z.string().optional(),
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

// Schema for Partners
export const PartnerSchema = z.object({
  name: z.string(),
  logo: z.string(),
});

// Schema for Community Contributors (Mentors)
export const CommunityContributorSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  contribution: z.string(),
  avatar: z.string(),
  description: z.string(),
  linkedin: z.string().url(),
  github: z.string().url(),
});

// Schema for Guest Speakers
export const GuestSpeakerSchema = z.object({
  id: z.number(),
  name: z.string(),
  company: z.string(),
  role: z.string(),
  topic: z.string(),
  date: z.string(),
  avatar: z.string(),
  linkedin: z.string().url(),
});

// Full Site Config Schema (for config.json)
export const ConfigSchema = z.object({
  community: z.object({
    creators: z.array(CreatorSchema),
    activeNodes: z.array(ActiveNodeSchema),
    partners: z.array(PartnerSchema),
  }),
});

// Infer types from schemas
export type Creator = z.infer<typeof CreatorSchema>;
export type ActiveNode = z.infer<typeof ActiveNodeSchema>;
export type Partner = z.infer<typeof PartnerSchema>;
export type CommunityContributor = z.infer<typeof CommunityContributorSchema>;
export type GuestSpeaker = z.infer<typeof GuestSpeakerSchema>;
export type SiteConfig = z.infer<typeof ConfigSchema>;

// Validate and export the parsed config
// partners is now validated
export const siteConfig: SiteConfig = ConfigSchema.parse(configData);

// Multi-file validation utility
export function validateConfig<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}
