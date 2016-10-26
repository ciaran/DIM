(function() {
  "use strict";

  // See https://angular-translate.github.io/docs/#/guide
  angular.module('dimApp')
    .config(['$translateProvider', function($translateProvider) {
      $translateProvider.useSanitizeValueStrategy('escape');

      $translateProvider
        .translations('en', {
          Level: "Level",
          Weapons: "Weapons",
          Armor: "Armor",
          General: "General",
          Postmaster: "Postmaster",
          Equip: "Equip",
          Store: "Store",
          Vault: "Vault",
          Vanguard: "Vanguard",
          Reputation: "Reputation",
          Intellect: "Intellect",
          Discipline: "Discipline",
          Strength: "Strength",
          SuperCooldown: "Super cooldown",
          GrenadeCooldown: "Grenade cooldown",
          MeleeCooldown: "Melee cooldown",
          TierProgress: "{{progress}} for {{tier}}",
          About: "About",
          SupportDIM: "Support DIM",
          Vendors: "Vendors",
          Support: "Support",
          Settings: "Settings",
          FilterHelp: "Search item/perk or is:arc",
          TagItem: "Tag Item",
          Favorite: "Favorite",
          Keep: "Keep",
          Junk: "Junk",
          Infuse: "Infuse",
          NotesPlaceholder: "Add notes to this item",
          BeforeLoadout: "Before '{{name}}'",
          CreateLoadout: "Create Loadout",
          LoadoutFromEquipped: "Equipped",
          EditLoadout: "Edit Loadout",
          DeleteLoadout: "Delete Loadout",
          ApplySearchLoadout: "Items = \"{{query}}\"",
          MaximizeLight: "Maximize Light",
          ItemLeveling: "Item Leveling",
          GatherEngrams: "Gather Engrams",
          GatherEngramsExceptExotics: "Exotics",
          FarmingMode: "Farming Mode (move items)",
          FarmingDesc: "DIM is moving Engram and Glimmer items from {{store}} to the vault and leaving one space open per item type to prevent anything from going to the Postmaster.",
          Configuration: "Configuration",
          FarmingConfig1: "Move Uncommon/Green Items to Vault",
          FarmingConfig1Tooltip: "If checked, DIM will also transfer all uncommon (green) items to the vault. If it's not checked, then green items will stay on your active character.",
          FarmingQuickmove: "Quick Move",
          Stop: "Stop",
          RestoreAllItems: "All Items",
          LoadoutName: "Loadout Name...",
          Save: "Save",
          SaveAsNew: "Save As New",
          Cancel: "Cancel",
          ItemsWithIcon: "Items with this icon will be equipped.",
          ClickToEquip: "Click on an item toggle equip.",
          Loadouts: "Loadouts",
          Progress: "Progress",
          LoadoutAppliedAuto: "Automatic Loadout Builder",
          LoadoutApplied: "Your loadout of {{amount}} items have been transferred to your {{store}}.",
          LoadoutAppliedError: "None of the items in your loadout could be transferred.",
          LoadoutAppliedWarn: "Your loadout has been partially transferred, but {{failed}} of {{total}} items had errors.",
          BackToDIM: "Back to DIM",
          LoadoutBuilder: "Loadout Builder",
          ShowGear: "Show {{class}} gear",
          HideGear: "Hide {{class}} gear",
          LockEquipped: "Lock Equipped",
          ClearLocked: "Clear Locked",
          LBLocked: "Locked Items",
          LBLockedHelp: "Drag and drop any item into its bucket to build set with that specific gear. Shift + click to exclude items.",
          FilterSets: "Filter sets",
          AdvancedOptions: "Advanced Options",
          Fast: "Fast",
          Full: "Full",
          ProcessingMode: "Processing mode",
          ProcessingModeHelpFast: "Only looks at your best gear.",
          ProcessingModeHelpFull: "Looks at more gear, but takes longer.",
          Scaled: "Scaled",
          Current: "Current",
          LightMode: "Light mode",
          LightModeHelpScaled: "Calculates loadouts as if all items were 350 defense.",
          LightModeHelpCurrent: "Calculates loadouts at current defense levels.",
          LBIncludeRare: "Include rare (blue) items",
          LBhelp: "Need help?",
          LBEquip: "Equip on Current Character",
          LBShowAllConfigs: "Show all configurations",
          LBHideAllConfigs: "Hide all configurations",
          LBLoading: "Loading best sets ({{percentage}}%)",
          LBVendor: "Include Vendor items",
          LBExclude: "Excluded Items",
          LBExcludeHelp: "Shift + click an item (or drag and drop into this bucket) to build sets without specific gear.",
          LBLockPerk: "Lock perk",
          LBMissing1: "Missing legendary or exotic pieces to build a full set!",
          LBMissing2: "Missing rare, legendary, or exotic pieces to build a full set!",
          ManifestBuild: "Building Destiny info database",
          ManifestError1: "Error loading Destiny info: ",
          ManifestError2: "Reload to retry.",
          ManifestDownload: "Downloading latest Destiny info from Bungie",
          ManifestLoad: "Loading saved Destiny info",
          ManifestUnzip: "Unzipping latest Destiny info",
          ManifestSave: "Saving latest Destiny info",
          VendorsLoad: "Loading Vendors",
          ArmorAndWeapons: "Armor & Weapons",
          ShipsAndVehicles: "Ships & Vehicles",
          Consumables: "Consumables",
          Bounties: "Bounties",
          ShadersAndEmblems: "Shaders & Emblems",
          Emotes: "Emotes",
          RefreshDestinyData: "Refresh Destiny Data",
          Filters: "Filters",
          Language: "Language (reload DIM to take effect)",
          HideUnfiltered: "Hide Unfiltered Items while Filtering",
          HideUnfilteredHelp: "Items that do not match filter criteria will be hidden.",
          AlwaysShowDetails: "Always Show Item Details",
          AlwaysShowDetailsHelp: "Clicking on an item will show a popup that can be expanded to show perk and stat details.  This option will always show that detail when you click on an item.",
          EnableAdvancedStats: "Enable advanced stat quality comparison features",
          EnableAdvancedStatsHelp: "Will enable advanced min/max features on the move dialog and enable the armor comparison view.",
          ShowOverlay: "Show new items with an overlay",
          ShowOverlayHelp: "Will show new items with an overlay.",
          ShowAnimations: "Show new item overlay animations on new items.",
          ShowAnimationsHelp: "Will show the animated new item overlay on new items. Turning this off can save CPU cycles.",
          ShowElemental: "Show elemental damage icons on weapons",
          ShowElementalHelp: "Show elemental damage icons on weapons.",
          SetSort: "Sort Items by:",
          SetSortHelp: "Sort items by rarity or their primary stat value.",
          SortPrimary: "Primary stat",
          SortRarity: "Rarity",
          SortRoll: "Stat roll percent",
          InventoryColumns: "Character Inventory Columns",
          InventoryColumnsHelp: "Select the number of columns for character inventory.",
          VaultColumns: "Vault Maximum Inventory Columns",
          VaultColumnsHelp: "Select the maximum number of columns for vault.",
          SizeItem: "Item Size",
          SizeItemHelp: "How big should items be?",
          ResetToDefault: "Reset to Default",
          CharacterOrder: "Character Order",
          CharacterOrderHelp: "Characters can be ordered by last login or based on their creation date.",
          CharacterOrderRecent: "By Most Recent Character",
          CharacterOrderReversed: "By Most Recent Character (Reversed)",
          CharacterOrderFixed: "Fixed (By Character Age)",
          ExportSS: "Download Spreadsheets",
          ExportSSHelp: "Download a CSV list of your items that can be easily viewed in the spreadsheet app of your choice.",
          DIMPopups: "DIM Info Popups",
          DIMPopupsReset: "Reset previously hidden info tips",
          DragHelp: "Hold shift or pause over drop zone to transfer a partial stack",
          ShowBucket: "Show {{bucket}}",
          StartSearch: "Start a search",
          RefreshInventory: "Refresh inventory",
          ToggleDetails: "Toggle showing full item details",
          MarkItemAs: "Mark item as '{{tag}}'",
          ClearNewItems: "Clear new items"
        })
        .translations('it', {
          Level: "Livello",
          Weapons: "Armi",
          Armor: "Armatura",
          General: "Generale",
          Postmaster: "Amministratrice",
          Equip: "Equipaggia",
          Store: "Memorizzare",
          Vault: "Depositi",
          Vanguard: "Avanguardia",
          Reputation: "Reputazione",
          Intellect: "Intelletto",
          Discipline: "Disciplina",
          Strength: "Forza",
          SuperCooldown: "Super tempo di recupero",
          GrenadeCooldown: "Granate tempo di recupero",
          MeleeCooldown: "Corpo a corpo tempo di recupero",
          TierProgress: "{{progress}} per {{tier}}",
          About: "Chi siamo",
          SupportDIM: "Aiutare DIM",
          Vendors: "Mercanti",
          Support: "Aiutare",
          Settings: "Impostazioni",
          TagItem: "Elemento Tag",
          Favorite: "Preferito",
          Keep: "Tenere",
          Junk: "Giunca",
          Infuse: "Infondi",
          NotesPlaceholder: "Aggiungere note a questa voce",
          CreateLoadout: "Creare Loadout",
          LoadoutFromEquipped: "Fornito",
          EditLoadout: "Modifica Loadout",
          DeleteLoadout: "Cancellare Loadout",
          ApplySearchLoadout: "Elementi = \"{{query}}\"",
          MaximizeLight: "Massimizzare la Luce",
          ItemLeveling: "Elemento di Livellamento",
          GatherEngrams: "Raccogliere Engram",
          GatherEngramsExceptExotics: "Esotiche",
          FarmingMode: "Engram a Depositi (Coltura)",
          RestoreAllItems: "Tutti gli Elementi",
          Loadouts: "Loadouts",
          Progress: "Progesso"
        })
        .translations('de', {
          Level: "Level",
          Weapons: "Waffen",
          Armor: "Rüstung",
          General: "Allgemein",
          Postmaster: "Poststelle",
          Equip: "Ausrüsten",
          Store: "Verstauen",
          Vault: "Tresor",
          Vanguard: "Vorhut",
          Reputation: "Ruf",
          Intellect: "Intellekt",
          Discipline: "Disziplin",
          Strength: "Stärke",
          SuperCooldown: "Super Abklingzeit",
          GrenadeCooldown: "Granaten Abklingzeit",
          MeleeCooldown: "Nahkampf Abklingzeit",
          TierProgress: "{{progress}} für {{tier}}",
          About: "Über",
          SupportDIM: "DIM Unterstützen",
          Vendors: "Händler",
          Support: "Unterstützen",
          Settings: "Einstellungen",
          FilterHelp: "Suche nach Item/Perk oder is:arc",
          TagItem: "Gegenstand taggen",
          Favorite: "Favorit",
          Keep: "Behalten",
          Junk: "Trödel",
          Infuse: "Infundieren",
          NotesPlaceholder: "Notiz für diesen Artikel",
          BeforeLoadout: "Zurück zu '{{name}}'",
          CreateLoadout: "Loadout erstellen",
          LoadoutFromEquipped: "Ausrüstung",
          EditLoadout: "Loadout bearbeiten",
          DeleteLoadout: "Loadout löschen",
          ApplySearchLoadout: "Gegenstand = \"{{query}}\"",
          MaximizeLight: "Licht maximieren",
          ItemLeveling: "Gegenstand aufwerten",
          GatherEngrams: "Engramme sammeln",
          GatherEngramsExceptExotics: "Exotisches",
          FarmingMode: "Engramme zum Tresor",
          FarmingDesc: "DIM verschiebt Engramme und Glimmergegenstände vom {{store}} in den Tresor und lässt einen Platz pro Gegenstandstyp frei um zu verhindern, dass Engramme zur Poststelle geschickt werden.",
          Configuration: "Konfiguration",
          FarmingConfig1: "Verschiebe ungewöhnliche/grüne Gegenstände in den Tresor",
          FarmingConfig1Tooltip: "Wenn aktiviert, verschiebt DIM auch alle ungewöhnlichen/grünen Gegenstände in den Tresor. Andernfalls bleiben diese Gegenstände auf dem aktiven Charakter.",
          FarmingQuickmove: "Schnelles Verschieben",
          Stop: "Stop",
          RestoreAllItems: "Alle Elemente",
          Loadouts: "Loadouts",
          Progress: "Fortschritt",
          LoadoutAppliedAuto: "Automatischer Loadout Builder",
          LoadoutApplied: "Dein Loadout aus {{amount}} Gegenständen wurde zum {{store}} übertragen.",
          LoadoutAppliedError: "Keiner der Gegenstände in deinem Loadout konnte übertragen werden.",
          LoadoutAppliedWarn: "Dein Loadout wurde teilweise angewendet, aber {{failed}} von {{total}} Gegenständen waren fehlerhaft.",
          BackToDIM: "Zurück zu DIM",
          LoadoutBuilder: "Loadout Builder",
          ShowGear: "Zeige {{class}} Ausrüstung",
          LBLocked: "Gesperrte Gegenstände",
          LBLockedHelp: "Ziehe einen beliebigen Gegenstand in sein Feld, um ihn für generierten Loadouts festzulegen. Mit Shift + Klick kannst du Gegenstände ignorieren.",
          FilterSets: "Sets filtern",
          AdvancedOptions: "Erweiterte Optionen",
          Fast: "Schnelle",
          Full: "Vollständige",
          ProcessingMode: "Berechnung",
          ProcessingModeHelpFast: "Nur die beste Ausrüstung wird einbezogen.",
          ProcessingModeHelpFull: "Bezieht die ganze Ausrüstung mit ein.",
          Scaled: "Skaliertes",
          Current: "Aktuelles",
          LightMode: "Lichtlevel",
          LightModeHelpScaled: "Berechnet Loadouts, bei denen alle Gegenstände Lichtlevel 350 besitzen.",
          LightModeHelpCurrent: "Berechnet Loadouts mit dem aktuellen Lichtlevel der Gegenstände.",
          LBIncludeRare: "Seltene (blaue) Gegenstände einbeziehen",
          LBhelp: "Brauchst du Hilfe?",
          LBEquip: "Am aktuellen Charakter anlegen.",
          LBShowAllConfigs: "Zeige alle Varianten",
          LBHideAllConfigs: "Verstecke alle Varianten",
          LBLoading: "Lade die besten Sets ({{percentage}}%)",
          LBVendor: "Gegenstände von Händlern einschließen",
          LBExclude: "Ignorierte Gegenstände",
          LBExcludeHelp: "Benutze Shift + Klick bei einem Gegenstand (oder ziehe ihn in dieses Feld) um Sets ohne diesen Gegenstand zu generieren.",
          LBLockPerk: "Perk festlegen",
          LBMissing1: "Es fehlen legendäre oder exotische Gegenstände, um ein vollständiges Set zu generieren!",
          LBMissing2: "Es fehlen seltene, legendäre oder exotische Gegenstände, um ein vollständiges Set zu generieren",
          ManifestBuild: "Lege Destiny Datenbank an",
          ManifestError1: "Fehler beim Laden von Informationen: ",
          ManifestError2: "App neu laden, um es nochmals zu versuchen.",
          ManifestDownload: "Lade neueste Daten von Bungie herunter",
          ManifestLoad: "Lade gespeicherte Daten",
          ManifestUnzip: "Entpacke neueste Daten",
          ManifestSave: "Speichere neueste Daten",
          VendorsLoad: "Lade Händler",
          ArmorAndWeapons: "Panzerung & Waffen",
          ShipsAndVehicles: "Schiffe & Fahrzeuge",
          Consumables: "Verbrauchsgegenstände",
          Bounties: "Beutezüge",
          ShadersAndEmblems: "Shader & Embleme",
          Emotes: "Emotes",
          RefreshDestinyData: "Aktualisiere Destiny Daten",
          Filters: "Filter",
          Language: "Sprache (lade DIM neu zum Übernehmnen)",
          HideUnfiltered: "Zeige nur die Suchergebnisse beim Filtern",
          HideUnfilteredHelp: "Gegenstände, die nicht zum Filter passen, werden ausgeblendet.",
          AlwaysShowDetails: "Zeige immer Details der Gegenstände",
          AlwaysShowDetailsHelp: "Ein Klick auf einen Gegenstand öffnet ein Popup, welches erweitert werden kann, um Details zu Statistiken und Perks zu zeigen. Diese Option wird immer diese Details zeigen, wenn du auf einen Gegenstand klickst.",
          EnableAdvancedStats: "Aktivieren der erweiterten Statusvergleichsfunktionen",
          EnableAdvancedStatsHelp: "Ermöglicht erweiterte Min/Max-Funktionen im Verschieben-Dialog und aktiviert die Rüstungsvergleichsansicht.",
          ShowOverlay: "Zeige neue Elemente mit einem Overlay",
          ShowOverlayHelp: "Zeigt neue Elemente mit einem hellen Overlay an.",
          ShowAnimations: "Zeige animiertes Overlay bei neuen Elementen an",
          ShowAnimationsHelp: "Zeigt ein animiertes Overlay bei neuen Elementen an. Abschalten verringert die CPU Auslastung.",
          ShowElemental: "Zeige Elementarschaden bei Waffen an",
          ShowElementalHelp: "Zeigt den Elementarschaden bei Waffen an.",
          SetSort: "Sortiere Gegenstände nach:",
          SetSortHelp: "Sortieren von Elementen nach Rarität oder ihrem primären Stat-Wert.",
          SortPrimary: "Primären Stat",
          SortRarity: "Rarität",
          SortRoll: "Stat-Roll Prozent",
          InventoryColumns: "Charakter Inventar Spalten",
          InventoryColumnsHelp: "Wähle die Anzahl der Spalten für das Charakter Inventar.",
          VaultColumns: "Maximale Spalten des Tresors",
          VaultColumnsHelp: "Wähle die maximale Anzahl von Spalten für den Tresor aus.",
          SizeItem: "Item Größe",
          SizeItemHelp: "Wie groß sollen die Gegenstände sein?",
          ResetToDefault: "Zurücksetzen auf Standard",
          CharacterOrder: "Charakter Reihenfolge",
          CharacterOrderHelp: "Charakter können nach dem letzten Login oder ihrem Erstelldatum sortiert werden.",
          CharacterOrderRecent: "Nach zuletzt aktivem Charakter",
          CharacterOrderReversed: "Nach zuletzt aktivem Charakter (umgedreht)",
          CharacterOrderFixed: "Fest (Nach Alter des Charakters)",
          ExportSS: "Lade Tabelle herunter",
          ExportSSHelp: "Lade eine CSV-Tabelle von deinen Gegenständen, die leicht mit jedem Tabellenprogramm angezeigt werden kann.",
          DIMPopups: "DIM Info Popups",
          DIMPopupsReset: "Zeige zuvor versteckte Info Tipps",
          DragHelp: "Halte Shift oder pausiere über der Drop-Zone, um einen Teilstapel zu übertragen",
          ShowBucket: "Zeige {{bucket}}",
          StartSearch: "Starte eine Suche",
          RefreshInventory: "Aktualisiere Inventar",
          ToggleDetails: "Schalter für vollständige Artikeldetails",
          MarkItemAs: "Markiere Element als '{{tag}}'",
          ClearNewItems: "Neue Elemente löschen"
        })
        .translations('fr', {
          Level: "Niveau",
          Weapons: "Armes",
          Armor: "Armure",
          General: "Général",
          Postmaster: "Commis des postes",
          Equip: "Équiper",
          Store: "Stocker",
          Vault: "Coffres",
          Vanguard: "Avant-garde",
          Reputation: "Estime",
          Intellect: "Intelligence",
          Discipline: "Discipline",
          Strength: "Force",
          SuperCooldown: "Régénération du Super",
          GrenadeCooldown: "Régénération de Grenade",
          MeleeCooldown: "Régénération de Mêlée",
          TierProgress: "{{progress}} pour {{tier}}",
          About: "À propos",
          SupportDIM: "Soutien DIM",
          Vendors: "Marchands",
          Support: "Soutien",
          Settings: "Paramètres",
          TagItem: "Tagger Article",
          Favorite: "Préféré",
          Keep: "Garder",
          Junk: "Camelote",
          Infuse: "Infuser",
          NotesPlaceholder: "Ajouter des notes à cet article",
          CreateLoadout: "Créer Loadout",
          LoadoutFromEquipped: "Equipé",
          EditLoadout: "Modifier Loadout",
          DeleteLoadout: "Effacer Loadout",
          ApplySearchLoadout: "Articles = \"{{query}}\"",
          MaximizeLight: "Maximiser la Lumière",
          ItemLeveling: "Evolution d'article",
          GatherEngrams: "Rassembler les Engrammes",
          GatherEngramsExceptExotics: "Exotiques",
          FarmingMode: "Engrammes aux Coffres (mode Farm)",
          RestoreAllItems: "Tous les Articles",
          Loadouts: "Loadouts",
          LoadoutAppliedAuto: "Constructeur de Loadout automatique",
          LoadoutApplied: "Votre loadout de {{amount}} articles a été transféré à votre {{store}}",
          LoadoutAppliedError: "Aucun des articles de votre loadout n'a pu être transféré.",
          LoadoutAppliedWarn: "Votre loadout a été partiellement transféré, mais {{failed}} sur {{total}} articles ont échoué."
        })
        .translations('es', {
          Level: "Nivel",
          Weapons: "Armas",
          Armor: "Armadura",
          Postmaster: "Administración",
          Equip: "Equipar",
          Store: "Almacenar",
          Vault: "Depósito",
          Vanguard: "Vanguardia",
          Reputation: "Reputación",
          Intellect: "Intelecto",
          Discipline: "Disciplina",
          Strength: "Fuerza",
          SuperCooldown: "Super tiempo",
          GrenadeCooldown: "Granade tiempo",
          MeleeCooldown: "Cuerpo a cuerpo tiempo",
          TierProgress: "{{progress}} por {{tier}}",
          About: "Sobre",
          SupportDIM: "Apoyo DIM",
          Vendors: "Comerciantes",
          Support: "Apoyo",
          Settings: "Configuración",
          TagItem: "Elemento de Etiqueta",
          Favorite: "Favorito",
          Keep: "Guardar",
          Junk: "Basura",
          Infuse: "Infundir",
          NotesPlaceholder: "Agregar notas a este artículo",
          CreateLoadout: "Crear Loadout",
          LoadoutFromEquipped: "Equipado",
          EditLoadout: "Editar Loadout",
          DeleteLoadout: "Borrar Loadout",
          ApplySearchLoadout: "Artículos = \"{{query}}\"",
          MaximizeLight: "Maximizar la Luz",
          ItemLeveling: "Nivelación Elemento",
          GatherEngrams: "Recopilar Engramas",
          GatherEngramsExceptExotics: "Exóticas",
          FarmingMode: "Engramas a Depósito (Agricultura)",
          RestoreAllItems: "Todos los Artículos",
          Loadouts: "Loadouts",
          Progress: "Progreso"
        })
        .translations('ja', {
          Level: "レベル",
          Weapons: "武器",
          Armor: "よろい",
          General: "全般",
          Postmaster: "ポストマスター",
          Equip: "装備する",
          Vault: "装備",
          Vanguard: "バンガード",
          Reputation: "評価",
          Intellect: "知性",
          Discipline: "鍛錬",
          Strength: "腕力",
          About: "紹介",
          SupportDIM: "サポート DIM",
          Vendors: "ベンダー",
          Support: "サポート",
          Settings: "設定",
          TagItem: "タグアイテム",
          Favorite: "本命",
          Keep: "保つ",
          Junk: "ジャンク",
          Infuse: "煎じる",
          NotesPlaceholder: "このアイテムにメモを追加",
          CreateLoadout: "作る Loadout",
          LoadoutFromEquipped: "備える",
          EditLoadout: "編集 Loadout",
          DeleteLoadout: "削除 Loadout",
          ApplySearchLoadout: "箇条 = \"{{query}}\"",
          MaximizeLight: "ライトを最大化",
          ItemLeveling: "アイテムの平準化",
          GatherEngrams: "エングラムを収集",
          GatherEngramsExceptExotics: "エキゾチック",
          FarmingMode: "エングラムは、 装備 (農業)",
          RestoreAllItems: "品揃え",
          Loadouts: "Loadouts",
          Progress: "進捗"
        })
        .translations('pt-br', {
          Level: "Nível",
          Weapons: "Armas",
          Armor: "Armaduras",
          General: "Geral",
          Postmaster: "Chefe do Correio",
          Equip: "Equipar",
          Store: "Armazenar",
          Vault: "Cofre",
          Vanguard: "Vanguarda",
          Reputation: "Reputação",
          Intellect: "Intelecto",
          Discipline: "Disciplina",
          Strength: "Força",
          SuperCooldown: "Tempo de carga da Super",
          GrenadeCooldown: "Tempo de carga da granada",
          MeleeCooldown: "Tempo de carga do corpo-a-corpo",
          TierProgress: "{{progress}} para {{tier}}",
          About: "Sobre",
          SupportDIM: "Apoie o DIM",
          Vendors: "Vendedores",
          Support: "Apoio",
          Settings: "Configurações",
          FilterHelp: "Buscar item/perk ou is:arc",
          TagItem: "Marcar item",
          Favorite: "Favorito",
          Keep: "Guardar",
          Junk: "Lixo",
          Infuse: "Infundir",
          NotesPlaceholder: "Adicionar observações a este item",
          BeforeLoadout: "Antes '{{name}}'",
          CreateLoadout: "Criar Loadout",
          LoadoutFromEquipped: "Equipado",
          EditLoadout: "Editar Loadout",
          DeleteLoadout: "Excluir Loadout",
          ApplySearchLoadout: "Itens = \"{{query}}\"",
          MaximizeLight: "Maximizar a Luz",
          ItemLeveling: "Nivelamento de item",
          GatherEngrams: "Obter engramas",
          GatherEngramsExceptExotics: "Exóticos",
          FarmingMode: "Modo Farm (mover engramas)",
          RestoreAllItems: "Todos os itens",
          Loadouts: "Loadouts",
          Progress: "Progresso",
          LoadoutAppliedAuto: "Construtor automático de Loadouts",
          LoadoutApplied: "Seu loadout de {{amount}} itens foram transferidos para seu {{store}}.",
          LoadoutAppliedError: "Nenhum item em seu Loadout pode ser transferido.",
          LoadoutAppliedWarn: "Seu Loadout foi parcialmente transferido, mas {{failed}} de {{total}} itens retornaram erros."
        })
        .fallbackLanguage('en');
    }]);
})();
