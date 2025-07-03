import { supabase } from "../../../shared/api/supabase/client"

export async function checkCarExistence(plateNumber: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('cars')
    .select('id')
    .eq('plate_number', plateNumber.trim().toUpperCase())
    .single()

  if (error) {
    if (error.code === 'PGRST116') return false
    throw error
  }

  return Boolean(data)
}