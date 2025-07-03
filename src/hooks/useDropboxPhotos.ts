import { useState, useEffect } from 'react';

interface DropboxPhoto {
  nome: string;
  caminhoCompleto: string;
  id: string;
  link?: string;
}

const DROPBOX_TOKEN = 'sl.u.AF1tHzm_Ybv2OeHevCJZbAyqs-EhZMpKePug2zemBREgxNjwDBenudH8gOyP0a2qwKePVa69EuHsu2Mu9FLaIAVAzbo-vf1ikMdfd_lvFZc2GDwFLOUxfoTh6zIxTW2NM0oH6ARvlQBZ9ZnQOLqdZvMVUkkOKrESP0Rnv_8_49b96JS9nDsJIezgwPUdDkgeLXAU_FloBegSgEfuZF2NxQQwb6F_dYdtghblFE6iwImkcHzcXBRMpv7Y6mjLSxMMcAyWEko2IiPmk5VGNVR4j-F2OZAx-pfOiqb8lcBZRnVrVjXxuD87KOJ74UUAXXSR0Xnpij_AZaxFeKCgg7nJAN9ZWBYXMl4peuMRmqWM9-wwOZlYGnozF__ynEhS8M_XmJOpdwSHEoDSpc3FybgW-j1-QeaFFgsR1XGK1iGhvGVm17_JE16hmDSMgpxLRG0KR14qLOhuRuWU0qD7K6NfQ6DpyOjqkwPXw--J23sgHh1DyiVWX4xbRJCSUSKEuXSebPavrySGmbJNdOVoG5afMcbgleNMvdpNQYK_HF-I1NAbCsHAq2i3gUroR9NklKuCHVV35YFm6dPnaM5HeSqUrxYjKcc6crv8_2Zf0VtkSVSFs50dflm3dvmv1eoyQrjFbY2-8xy0EgkB8P6_nRX30a19fxEoiMb_uz1n8yxZJSp-a3vCQ1Ne93qajdLan8fZIITWvqsmSWvumvyzgxTk7_65ospyOw73u89bsZQcNE7VxlXGKNP-1IW0NF2uWC5aQXljOZFWbqbwC5gfH9HffqKmyb5u_hMU8LdMUqSO9YTe1Pl-V0FIRLnyhlceJQLlbMKqNvwfiSht1vvRO7sjXn5D2ovtVFq5YQVoQRIxZNptqEFkUUxurNwL2BMTSHho0kWcL4a9oR2a7jKUwfDDSTBqPlet60dmJMIM3-0xM2QPM5Ujs54c62bRQcnHzwIAG4HclUe-2fTJ9BhTmm-03NmxnlQ5VDPAJBrAJ2kxO8ShdldwBxZzyvsDAmSr6DaimWGlVwMTT2xvb_s4k5YgCHwybhdMzaxNh7rR2vM65003yqxG4JmtUf8Ix6iULwFlHp5qnu6gROfBHYTV4gJMOOl28cB_wRxlyEX6CBDsN-httoILasliw2OLa5bRHnnqocjJIwRLHKoRRhwwbCCv2u86x5_08Ky_bggEZeBQI9_zDWXIAmZqnJz7G-f0QeEM5gY44r6CWcC_ZS07dpoqsmHvGDeqCrLB1BtgXrtfjx15_YmWZCB6QLA5u0v2U1KAPlIDRGRAhFVNBjkoAoNaGKOtv0inVYF_29Hq_cTk05Il5FoRgXwSTONnaP9CxfzQVF3iLzEnN59y0CJNmZBvXVaq8PEcIjCwcdxkXufsJTUZcaOfEt9TJBlotu4MruRuGhXwXxNEjRqtdWq2Q9C7pPVjCUkek2yFgLPMf_QH5Zol4RWBbJy4vboRBQhd4kC-l_o';

const DROPBOX_FOLDER_URL = 'https://www.dropbox.com/home/guimarimesteticaautomotiva/fotos';

function extractDropboxPath(url: string): string {
  try {
    let path = url.replace(/https?:\/\/(www\.)?dropbox\.com/, '');
    path = path.split('?')[0];
    path = path.replace(/^\/(s|sh)\/[^\/]+/, '');
    path = path.replace(/^\/home/, '');
    
    if (!path.startsWith('/') && path !== '') {
      path = '/' + path;
    }
    
    if (path === '' || path === '/') {
      path = '';
    }
    
    return path;
  } catch (e) {
    return url.startsWith('/') ? url : '/' + url;
  }
}

async function getDropboxFiles() {
  try {
    const folderPath = extractDropboxPath(DROPBOX_FOLDER_URL);
    
    const response = await fetch('https://api.dropboxapi.com/2/files/list_folder', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DROPBOX_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: folderPath,
        recursive: false,
        include_media_info: true,
        include_deleted: false,
        include_has_explicit_shared_members: false,
        include_mounted_folders: true,
        include_non_downloadable_files: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error_summary || `Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    return {
      success: true,
      files: data.entries || [],
    };
    
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      files: [],
    };
  }
}

function getImageFiles(files: any[]): DropboxPhoto[] {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg'];
  
  return files
    .filter(file => {
      if (file['.tag'] !== 'file') return false;
      const extension = file.name.split('.').pop()?.toLowerCase();
      return imageExtensions.includes(extension);
    })
    .map(file => ({
      nome: file.name,
      caminhoCompleto: file.path_display,
      id: file.id,
    }));
}

async function getTemporaryLink(filePath: string): Promise<string | null> {
  try {
    const response = await fetch('https://api.dropboxapi.com/2/files/get_temporary_link', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DROPBOX_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path: filePath
      })
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.link;
    
  } catch (error) {
    console.error('Erro ao obter link temporário:', error);
    return null;
  }
}

export const useDropboxPhotos = () => {
  const [photos, setPhotos] = useState<DropboxPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setLoading(true);
        const result = await getDropboxFiles();
        
        if (!result.success) {
          setError(result.error || 'Erro ao carregar fotos');
          return;
        }
        
        const imageFiles = getImageFiles(result.files);
        
        // Carrega links temporários para as primeiras 30 fotos
        const photosWithLinks = await Promise.all(
          imageFiles.slice(0, 30).map(async (photo) => {
            const link = await getTemporaryLink(photo.caminhoCompleto);
            return {
              ...photo,
              link: link || undefined
            };
          })
        );
        
        setPhotos(photosWithLinks.filter(photo => photo.link)); // Apenas fotos com link válido
        setError(null);
      } catch (err) {
        setError('Erro ao carregar fotos do Dropbox');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  return { photos, loading, error };
};