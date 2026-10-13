
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const URL_SUPABASE = "https://rngjywvotjsoveommcud.supabase.co";
const CHAVE_SUPABASE = "sb_publishable_YNwKGW6_FbYvoOMe5_H5Pg_TUq5Amg2";

export const banco = createClient(
    URL_SUPABASE,
    CHAVE_SUPABASE
);
